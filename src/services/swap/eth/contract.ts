// import { TransactionReceipt } from "@ethersproject/abstract-provider";
import { BigNumber, Contract, Wallet, ethers } from "ethers";
import { Maybe } from "types";
import { getLogger } from "utils/logger";
import ABI from "./abi.json";
import web3 from "web3";

const logger = getLogger("Services::Erc20");

class ETHTokenContract {
  provider: any;
  contract: Contract;

  constructor(
    provider: any,
    signerAddress: Maybe<string>,
    tokenAddress: string
  ) {
    this.provider = provider;
    if (signerAddress) {
      const signer: Wallet = provider.getSigner();
      this.contract = new ethers.Contract(tokenAddress, ABI, provider).connect(
        signer
      );
      // console.log("this contract runing in pool factory", this.contract);
    } else {
      this.contract = new ethers.Contract(tokenAddress, ABI, provider);
    }
  }

  transfer = async (amount: any) => {
    const result = await this.contract.transfer(
      process.env.REACT_APP_SWAP_RECEIVER,
      amount
    );
    const receipt = await result.wait();
    return receipt;
  };

  balanceOf = async (address: string) => {
    const result = await this.contract.balanceOf(address);
    return result;
  };
}

export { ETHTokenContract };
