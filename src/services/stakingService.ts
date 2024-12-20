// import { TransactionReceipt } from "@ethersproject/abstract-provider";
import { BigNumber, Contract, Wallet, ethers } from "ethers";
import { Maybe } from "types";
import { getLogger } from "utils/logger";
import stakingAbi from "./Staking.json";
import { ethToWei } from "utils";

const logger = getLogger("Services::Erc20");

class StakingService {
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
      this.contract = new ethers.Contract(
        tokenAddress,
        stakingAbi.abi,
        provider
      ).connect(signer);
      // console.log("this contract runing in pool factory", this.contract);
    } else {
      this.contract = new ethers.Contract(
        tokenAddress,
        stakingAbi.abi,
        provider
      );
    }
  }

  getaddress(): string {
    return this.contract.address;
  }

  getSymbol = async () => {
    const tx = await this.contract.symbol();
    return tx;
  };

  getBalance = async (address: string) => {
    const balance = await this.contract.balanceOf(address);
    return balance;
  };

  getCreatedPoolId = async (): Promise<BigNumber> => {
    return this.contract.createdPoolId();
  };

  getPoolCount = async (): Promise<BigNumber> => {
    return this.contract.poolsCount();
  };

  getPool = async (index: BigNumber): Promise<string> => {
    return this.contract.pools(index);
  };

  register = async (
    staking: number | BigNumber,
    amount: string
    //  gas: { gasLimit?: number; gasPrice?: number }
  ): Promise<string> => {
    // console.log("Create pool runs");
    const transactionObject = await this.contract.register(staking, ethToWei(amount), {
      // gasLimit: 10000000,
      // gasPrice: 10000000000,
      // gasLimit: 1500000,
      // gasPrice: 10000000000,
    });
    logger.log(`applyForStaking transaction hash: ${transactionObject.hash}`);
    return transactionObject;
  };


  applyforstaking = async (
    poolId: number | BigNumber
    //  gas: { gasLimit?: number; gasPrice?: number }
  ): Promise<string> => {
    // console.log("Create pool runs");
    const transactionObject = await this.contract.applyForStaking(poolId, {
      // gasLimit: 10000000,
      // gasPrice: 10000000000,
      // gasLimit: 1500000,
      // gasPrice: 10000000000,
    });
    logger.log(`applyForStaking transaction hash: ${transactionObject.hash}`);
    return transactionObject;
  };

  stakingClaim = async (
    // poolId: number | BigNumber,
    // gas: { gasLimit?: number; gasPrice?: number }
    address: string // metamask address
  ): Promise<string> => {
    // console.log("Create pool runs");
    const transactionObject = await this.contract.stakingClaim(
      // poolId,
      address,
      {
        // gasLimit: 10000000,
        // gasPrice: 10000000000,
        // gasLimit: 1500000,
        // gasPrice: 10000000000,
      }
    );
    logger.log(`stakingClaim transaction hash: ${transactionObject.hash}`);
    return transactionObject;
  };

  claimAmount = async (
    poolId: number | BigNumber,
    address: string,
    gas: { gasLimit?: number; gasPrice?: number }
  ): Promise<string> => {
    // console.log("Create pool runs");
    const transactionObject = await this.contract.claimAmount(
      poolId,
      address,
      gas
    );
    logger.log(`claimAmount transaction hash: ${transactionObject.hash}`);
    return transactionObject;
  };
}

export { StakingService };
