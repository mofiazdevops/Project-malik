import { POSClient, use } from "@maticnetwork/maticjs";

import { Web3ClientPlugin } from "@maticnetwork/maticjs-web3";
import Web3 from "web3";

export const getPosClientRoot = async (address) => {
  const mainRPC =
    "https://eth-mainnet.g.alchemy.com/v2/Dq4tJEayMSxCgoeF8-QnPB5ybwjw55LD";
  const childRPC =
    "https://polygon-mainnet.g.alchemy.com/v2/Rt7tMAtw4BPLw1FXpXlTwShd1TquGvoA";

  use(Web3ClientPlugin);
  const posClient = new POSClient();
  // const provider1 = new ethers.providers.Web3Provider(mainRPC);
  // const provider2 = new ethers.providers.Web3Provider(childRPC);
  var provider1 = new Web3(mainRPC);
  var provider2 = new Web3(childRPC);

  try {
    return await posClient.init({
      network: "mainnet", // or 'mainnet'
      version: "v1", // or 'v1'
      parent: {
        provider: provider1,
        defaultConfig: {
          from: address, // Replace with your Ethereum address
        },
      },
      child: {
        provider: provider2,
        defaultConfig: {
          from: address, // Replace with your Polygon address
        },
      },
    });
  } catch (error) {
    console.error("Error initializing POSClient:", error);
    throw error;
  }
};
