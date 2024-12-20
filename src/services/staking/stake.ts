import { TransactionReceipt } from "@ethersproject/abstract-provider/lib/index";
import { BigNumber, Contract, Wallet, ethers } from "ethers";
import { Maybe } from "types";
import { getLogger } from "utils/logger";
import stakingAbi from "./staking.abi.json";
import { ethToWei } from "utils";
const logger = getLogger("Services::StakeService");

class StakeService {
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
      console.log('this is token address',tokenAddress);
      this.contract = new ethers.Contract(
        tokenAddress,
        stakingAbi,
        provider
      ).connect(signer);
    } else {
      this.contract = new ethers.Contract(tokenAddress, stakingAbi, provider);
    }
  }

  get address(): string {
    return this.contract.address;
  }

  getBalanceOf = async (address: string): Promise<any> => {
    return this.contract.balanceOf(address);
  };

  //mishkat have to call the staking function, which take amount as input

  createStaking = async (
    address: string,
    durationType: number,
    apy: number,
    initialTokens: BigNumber
  ) => {
    return this.contract.createStakingPool(
      address,
      durationType,
      apy,
      initialTokens
    );
  };

  applyforstaking = async (
    poolId: number | BigNumber
    //  gas: { gasLimit?: number; gasPrice?: number }
  ): Promise<string> => {
    // console.log(this);
    const transactionObject = await this.contract.applyForStaking(poolId, {
      // gasLimit: 10000000,
      // gasPrice: 10000000000,
      // gasLimit: 1500000,
      // gasPrice: 10000000000,
    });
    logger.log(`applyForStaking transaction hash: ${transactionObject.hash}`);
    return transactionObject;
  };

  stake = async (
    amount: BigNumber,
    address: string
  ): Promise<TransactionReceipt> => {
    const transactionObject = await this.contract.stake(address, amount);
    logger.log(`stake transaction hash: ${transactionObject.hash}`);
    return this.provider.waitForTransaction(transactionObject.hash);
  };

  approve = async (
    contractAddress: string,
    amount: string
  ): Promise<TransactionReceipt> => {
    const transactionObject = await this.contract.approve(contractAddress, amount);
    logger.log(`stake transaction hash: ${transactionObject.hash}`);
    return transactionObject;
  };

  // stakingClaim(address userAddress)

  //added by mishkat for testing
  register = async (
    staking: number | BigNumber,
    amount: string
    //  gas: { gasLimit?: number; gasPrice?: number }
  ): Promise<{poolId: string | undefined, reg: any}> => {
    // console.log("Create pool runs");
    const reg = await this.contract.register(staking, ethToWei(amount), {
      // gasLimit: 10000000,
      // gasPrice: 10000000000,
      gasLimit: 1500000,
      // gasPrice: 10000000000,
    });
    const tx = await reg.wait();
    let poolId: string | undefined= undefined;
    for(const event of tx.events){
      if(event.args && event.args.length > 0){
        console.log(`Event ${event.event} with args ${event.args[0]!}`);
        poolId= `${event.args[0]!}`;
      }
    } 
    console.log(reg,'this is the true ');
    console.log(reg,'this is the true ');
    logger.log(`applyForStaking transaction hash: ${reg.hash}`);
    return {reg, poolId};
  };

  // stake= async ( address: string, amount: BigNumber)=> {
  //   return this.contract.stake(address,amount);
  // };
  // getClaimAmount(address userAddress)

  getClaimAmount = async (address: string): Promise<any>=>{ //metamask
    return this.contract.getClaimAmount(address);
  };

  
  getAllUsersInfo= async (): Promise<any>=>{
    return this.contract.getAllUsersInfo();
  }
  
  stakingClaim = async (
    userAddress: string,
    // poolId: number | BigNumber,
    // gas: { gasLimit?: number; gasPrice?: number }
    // address: string // metamask address
  ): Promise<{transactionObject: any, TokensStaked: number | string | undefined}> => {
    // console.log("Create pool runs");
    const transactionObject = await this.contract.stakingClaim(
      // poolId,
      userAddress,
      // address,
      {
        // gasLimit: 10000000,
        // gasPrice: 10000000000,
        // gasLimit: 1500000,
        // gasPrice: 10000000000,
      }
    );
    const tx = await transactionObject.wait();

    let poolId: string | undefined= undefined;
    let TokensStaked: number | string | undefined;

    // const testTokensStaked: number | string | undefined = await tx.TokensStaked;
    // const testTokensStaked: number | string | undefined = await tx.TokensStaked.wait();

    for(const event of tx.events){
      if(event.args && event.args.length > 0){
        console.log(`Event ${event.event} with args ${event.args[0]!}`);
        poolId= `${event.args[0]!}`;
        TokensStaked= `${event.args[2]}`;
      }
    };
    console.log('this is poolid', poolId);
    // console.log('this is event transaction', transactionObject);
    console.log('this is tokenStaked', TokensStaked);

    // console.log('this is test tokenstaked', testTokensStaked);
    // console.log('this is event tx', tx);
    logger.log(`stakingClaim transaction hash in stake.ts: ${transactionObject.hash}`);
    return {transactionObject,TokensStaked};
  };
  
  getTotalStackedFor = async (address: string): Promise<any> => {
    return this.contract.totalStakedFor(address);
  };

  getTotalStacked = async (): Promise<any> => {
    return this.contract.totalStaked();
  };

  totalSupply = async (): Promise<any> => {
    return this.contract.totalSupply();
  };

  unstake = async (amount: BigNumber): Promise<TransactionReceipt> => {
    const transactionObject = await this.contract.unstake(amount, "0x");

    return this.provider.waitForTransaction(transactionObject.hash);
  };
}

export { StakeService };
