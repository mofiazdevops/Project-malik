import { POSClient, use } from "@maticnetwork/maticjs";

import { Web3ClientPlugin } from "@maticnetwork/maticjs-web3";
import { ethers } from "ethers";
import Web3 from "web3";

export const PrivatePosClient = async (address, token) => {
  const ethRPC =
    "https://eth-mainnet.g.alchemy.com/v2/Dq4tJEayMSxCgoeF8-QnPB5ybwjw55LD";
  const polygonRPC =
    "https://polygon-mainnet.g.alchemy.com/v2/Rt7tMAtw4BPLw1FXpXlTwShd1TquGvoA";

  use(Web3ClientPlugin);
  const posClient = new POSClient();

  const privateKey = process.env.REACT_APP_SWAP_ACCOUNT_PRIVATE_KEY; // Replace with your private key

  const mainProvider = new Web3(new Web3.providers.HttpProvider(polygonRPC));
  mainProvider.eth.accounts.wallet.add(privateKey);

  const childProvider = new Web3(new Web3.providers.HttpProvider(ethRPC));
  childProvider.eth.accounts.wallet.add(privateKey);

  try {
    await posClient.init({
      network: "mainnet", // or 'mainnet'
      version: "v1", // or 'v1'
      parent: {
        provider: mainProvider,
        defaultConfig: {
          from: address, // Replace with your Ethereum address
        },
      },
      child: {
        provider: childProvider,
        defaultConfig: {
          from: address, // Replace with your Polygon address
        },
      },
    });
    return await posClient.erc20(token, true);
  } catch (error) {
    console.error("Error initializing POSClient:", error);
    throw error;
  }
};
