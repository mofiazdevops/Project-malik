import { BigNumber, Contract, Wallet, ethers } from "ethers";
import { Maybe } from "types";
import { getLogger } from "utils/logger";
import poolAbi from "./Pool.json";

const logger = getLogger("Services::Erc20");

export default class PoolService {
    provider: any;
    contract: Contract;

    constructor(
        provider: any,
        signerAddress: Maybe<string>,
        tokenAddress: string
    ) {
        this.provider = provider;
        // console.log("provider", provider);
        // console.log("account", signerAddress);
        // console.log("contractAddress", tokenAddress);
        if (signerAddress) {
            const signer: Wallet = provider.getSigner(signerAddress);
            // console.log("signer", signer);
            this.contract = new ethers.Contract(
                tokenAddress,
                poolAbi.abi,
                provider
            ).connect(signer);
        } else {
            this.contract = new ethers.Contract(
                tokenAddress,
                poolAbi.abi,
                provider
            );
        }
    }

    getTokentarget(): string {
        return this.contract.tokenTarget();
    }

    getaddress(): string {
        return this.contract.address;
    }

    getwhiteListingCount(): string {
        return this.contract.getwhiteListingCount();
    }

    getwhitelistaddresess(): string {
        return this.contract.getWhitelistedAddresses();
    }

    checkWhitelistedAddress = async (address: string): Promise<boolean> => {
        return this.contract.checkWhitelistedAddress(address);
    };

    getClaimableAmount = async (address: string): Promise<BigNumber> => {
        return this.contract.claimableAmount(address);
    };

    setMeta = async (meta: string): Promise<string> => {
        const transactionObject = await this.contract.setMeta(meta, {
            value: "0x0",
        });
        logger.log(`setMeta transaction hash: ${transactionObject.hash}`);
        return transactionObject.hash;
    };

    claim = async (): Promise<string> => {
        const transactionObject = await this.contract.claim({
            value: "0x0",
        });
        logger.log(`claim transaction hash: ${transactionObject.hash}`);
        return transactionObject.hash;
    };

    withdrawToken = async (): Promise<string> => {
        const transactionObject = await this.contract.withdrawToken({
            value: "0x0",
        });
        logger.log(`withdrawToken transaction hash: ${transactionObject.hash}`);
        return transactionObject.hash;
    };

    withdrawWei = async (amount: BigNumber): Promise<string> => {
        const transactionObject = await this.contract.withdrawWei(amount, {
            value: "0x0",
        });
        logger.log(`withdrawWei transaction hash: ${transactionObject.hash}`);
        return transactionObject.hash;
    };

    withdrawWeiToken = async (amount: BigNumber): Promise<string> => {
        const transactionObject = await this.contract.withdrawWeiToken(amount, {
            value: "0x0",
        });
        logger.log(
            `withdrawWeiToken transaction hash: ${transactionObject.hash}`
        );
        return transactionObject.hash;
    };

    buyWithEth = async (amount: BigNumber): Promise<string> => {
        const transactionObject = await this.contract.buyWithEth({
            value: amount,
        });
        logger.log(`buyWithEth transaction hash: ${transactionObject.hash}`);
        return transactionObject.hash;
    };

    buy = async (amount: number | BigNumber): Promise<string> => {
        // , {
        //   value: "0x0",
        // }
        const transactionObject = await this.contract.buy(amount, {
            gasLimit: 10000000,
            gasPrice: 10000000000,
        });
        logger.log(`buy transaction hash: ${transactionObject.hash}`);
        return transactionObject;
    };

    vestingClaim = async (): Promise<string> => {
        const transactionObject = await this.contract.vestingClaim({
            value: "0x0",
        });
        logger.log(`claim transaction hash: ${transactionObject.hash}`);
        return transactionObject.hash;
    };

    addMultipleWhitelistedAddresses = async (
        addresses: string[]
    ): Promise<string> => {
        const transactionObject =
            await this.contract.addMultipleWhitelistedAddresses(addresses, {
                value: "0x0",
            });
        logger.log(
            `addMultipleWhitelistedAddresses transaction hash: ${transactionObject.hash}`
        );
        return transactionObject.hash;
    };

    removeWhitelistedAddress = async (address: string): Promise<string> => {
        const transactionObject = await this.contract.removeWhitelistedAddress(
            address
            // {
            //   value: "0x0",
            // }
        );
        logger.log(
            `removeWhitelistedAddress transaction hash: ${transactionObject.hash}`
        );
        return transactionObject.hash;
    };

    // New

    addWhitelistedAddress = async (address: string): Promise<string> => {
        const transactionObject = await this.contract.addWhitelistedAddress(
            address
            // {
            //   value: "0x0",
            // }
        );
        logger.log(
            `addWhitelistedAddress transaction hash: ${transactionObject.hash}`
        );
        return transactionObject.hash;
    };

    startTime = async (): Promise<any> => {
        const transactionObject = await this.contract.startTime();
        return transactionObject;
    };

    endTime = async (): Promise<any> => {
        const transactionObject = await this.contract.endTime();
        return transactionObject;
    };

    claimTime = async (): Promise<any> => {
        const transactionObject = await this.contract.claimTime();
        return transactionObject;
    };

    ratio = async (): Promise<any> => {
        const transactionObject = await this.contract.ratio();
        return transactionObject;
    };

    maxWei = async (): Promise<any> => {
        const transactionObject = await this.contract.maxWei();
        return transactionObject;
    };

    minWei = async (): Promise<any> => {
        const transactionObject = await this.contract.minWei();
        return transactionObject;
    };

    weiRaised = async (): Promise<any> => {
        const transactionObject = await this.contract.weiRaised();
        return transactionObject;
    };

    // Get Token Address
    tokenAddress = async (): Promise<any> => {
        const transactionObject = await this.contract.token();
        return transactionObject;
    };

    // Get Total Owed
    totalOwed = async (): Promise<any> => {
        const transactionObject = await this.contract.totalOwed();
        return transactionObject;
    };

    setBaseData = async (
        poolType: number,
        startTime: number,
        endTime: number,
        claimTime: number
    ): Promise<any> => {
        const transactionObject = await this.contract.setBaseData(
            poolType,
            startTime,
            endTime,
            claimTime,
            "Testing"
        );
        return transactionObject;
    };

    poolProgress = async (): Promise<any> => {
        const transactionObject =
            await this.contract.filters.PoolProgressChanged();
        // console.log("Pool Progress", transactionObject);
        return transactionObject;
    };
}
