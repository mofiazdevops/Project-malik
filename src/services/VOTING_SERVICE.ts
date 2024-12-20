// import { TransactionReceipt } from "@ethersproject/abstract-provider";
import { BigNumber, Contract, Wallet, ethers } from "ethers";
import { Maybe } from "types";
import { getLogger } from "utils/logger";
import VOTEabi from "./vote.abi.json";
import web3 from "web3";

const logger = getLogger("Services::Erc20");

class VotingService {
  provider: string;
  contract: Contract;

  constructor(
    provider: any,
    tokenAddress: string,
    signerAddress?: Maybe<string>
  ) {
    this.provider = provider;
    const rpc_provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mainnet.g.alchemy.com/v2/Rt7tMAtw4BPLw1FXpXlTwShd1TquGvoA"
    );

    if (signerAddress) {
      const signer: Wallet = provider.getSigner();
      this.contract = new ethers.Contract(
        tokenAddress,
        VOTEabi.abi,
        provider
      ).connect(signer);
      // console.log("this contract runing in pool factory", this.contract);
    } else {
      this.contract = new ethers.Contract(
        tokenAddress,
        VOTEabi.abi,
        rpc_provider
      );
    }
  }

  vote = async (id: string) => {
    const balance = await this.contract.vote(id);
    return balance;
  };

  minimum_voting_balance = async () => {
    const balance = await this.contract.minimun();
    return balance;
  };

  airdrop = async () => {
    const balance = await this.contract.airdrop();
    return balance;
  };

  winnerid = async () => {
    const balance = await this.contract.winnerid();
    return balance;
  };

  getVoters = async () => {
    const balance = await this.contract.getVoters();
    return balance;
  };

  getAllCandidates = async () => {
    const balance = await this.contract.getAllCandidates();
    return balance;
  };

  getEndTime = async () => {
    const balance = await this.contract.getEndTime();
    return balance;
  };
}

export { VotingService };
