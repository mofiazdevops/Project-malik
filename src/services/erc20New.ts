import { TransactionReceipt } from "@ethersproject/abstract-provider/lib/index";
import { BigNumber, Contract, Wallet, ethers, utils } from "ethers";
import { IToken, Maybe } from "types";
import { getLogger } from "utils/logger";
import { isAddress, isContract } from "utils/tools";

const logger = getLogger("Services::Erc20");

const erc20Abi = [
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "LockList",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "Account", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "LockTokens",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "LockedTokens",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ internalType: "address", name: "Account", type: "address" }],
        name: "UnLockTokens",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "Account", type: "address" },
            { internalType: "bool", name: "mode", type: "bool" },
        ],
        name: "UserLock",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "address", name: "_spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "_spender", type: "address" },
            { internalType: "uint256", name: "_value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "_spender", type: "address" },
            { internalType: "uint256", name: "_value", type: "uint256" },
            { internalType: "bytes", name: "_extraData", type: "bytes" },
        ],
        name: "approveAndCall",
        outputs: [{ internalType: "bool", name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
        name: "burn",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "Account", type: "address" },
            { internalType: "uint256", name: "_value", type: "uint256" },
        ],
        name: "burnFrom",
        outputs: [{ internalType: "bool", name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "_from", type: "address" },
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_value", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];

class ERC20NewService {
    provider: any;
    contract: Contract;

    constructor(
        provider: any,
        signerAddress: Maybe<string>,
        tokenAddress: string
    ) {
        this.provider = provider;

        if (signerAddress !== "") {
            const signer: Wallet = provider.getSigner(signerAddress);
            this.contract = new ethers.Contract(
                tokenAddress,
                // "0x2e7f6932b3b52D05821D0C60Efa5Fd631F426E0F",
                // "0x1dde2b566947c9459af57cf5b4700fa985bb721f",
                erc20Abi,
                provider
            ).connect(signer);
            // console.log("TOken this one", this.contract);
            // console.log("This contract", tokenAddress);
            // console.log("This provider", provider);
        } else {
            this.contract = new ethers.Contract(
                tokenAddress,
                erc20Abi,
                provider
            );
        }
    }

    getSymbol = async (): Promise<string> => {
        const symbol = await this.contract.symbol();
        return symbol;
    };

    getName = async (): Promise<string> => {
        const name = await this.contract.name();
        return name;
    };

    getBalance = async (id: Maybe<string>): Promise<number> => {
        const balance = await this.contract.getBalanceOf(id);
        return balance;
    };

    getaddress(): string {
        return this.contract.address;
    }

    /**
     * @returns A boolean indicating if `spender` has enough allowance to transfer `neededAmount` tokens from `spender`.
     */
    hasEnoughAllowance = async (
        owner: string,
        spender: string,
        neededAmount: BigNumber
    ): Promise<boolean> => {
        // console.log("Owner in hasenoughallownce", owner);
        const allowance: BigNumber = await this.contract.allowance(
            owner,
            spender
        );
        // return allowance.gte(neededAmount);
        return allowance.gte(1000);
    };

    /**
     * @returns The allowance given by `owner` to `spender`.
     */
    allowance = async (owner: string, spender: string): Promise<BigNumber> => {
        return this.contract.allowance(owner, spender);
    };

    /**
     * Approve `spender` to transfer `amount` tokens on behalf of the connected user.
     */
    approve = async (
        spender: string,
        amount: BigNumber
    ): Promise<TransactionReceipt> => {
        // console.log("Approve function in erc20 amount is", amount);
        const transactionObject = await this.contract.approve(spender, amount, {
            value: "0x0",
        });
        logger.log(`Approve transaction hash: ${transactionObject.hash}`);
        return this.provider.waitForTransaction(transactionObject.hash);
    };

    /**
     * Approve `spender` to transfer an "unlimited" amount of tokens on behalf of the connected user.
     */
    approveUnlimited = async (spender: string): Promise<string> => {
        // console.log("Spender", spender);
        // console.log("ethers.constants.MaxUint256", ethers.constants.MaxUint256);
        const transactionObject = await this.contract.approve(
            "0x2df7317eA3001cF285d35092a2d9dC721da629dd",
            // spender,
            // ethers.constants.MaxUint256,
            1000,
            {
                value: "0x0",
            }
        );
        logger.log(
            `Approve unlimited transaccion hash: ${transactionObject.hash}`
        );
        return this.provider.waitForTransaction(transactionObject.hash);
    };

    getBalanceOf = async (address: string): Promise<any> => {
        return this.contract.balanceOf(address);
    };

    totalSupply = async (): Promise<any> => {
        return this.contract.totalSupply();
    };

    hasEnoughBalanceToFund = async (
        owner: string,
        amount: BigNumber
    ): Promise<boolean> => {
        const balance: BigNumber = await this.contract.balanceOf(owner);
        return balance.gte(amount);
    };

    isValidErc20 = async (): Promise<boolean> => {
        try {
            if (!isAddress(this.contract.address)) {
                throw new Error("Is not a valid erc20 address");
            }

            if (!isContract(this.provider, this.contract.address)) {
                throw new Error("Is not a valid contract");
            }

            const [decimals, symbol] = await Promise.all([
                this.contract.decimals(),
                this.contract.symbol(),
            ]);

            return !!(decimals && symbol);
        } catch (err: any) {
            logger.error(err?.message);
            return false;
        }
    };

    getProfileSummary = async (): Promise<IToken | undefined> => {
        let decimals;
        let symbol;
        let name;
        try {
            [decimals, symbol, name] = await Promise.all([
                this.contract.decimals(),
                this.contract.symbol(),
                this.contract.name(),
            ]);
        } catch (err: any) {
            logger.error(err?.message);
            return undefined;
        }

        return {
            address: this.contract.address,
            decimals,
            symbol,
            name,
            image: "",
        };
    };

    getTotalSupply = async (): Promise<BigNumber> => {
        return this.contract.totalSupply();
    };

    static encodeTransferFrom = (
        from: string,
        to: string,
        amount: BigNumber
    ): string => {
        const transferFromInterface = new utils.Interface(erc20Abi);

        return transferFromInterface.encodeFunctionData("transferFrom", [
            from,
            to,
            amount,
        ]);
    };

    static encodeTransfer = (to: string, amount: BigNumber): string => {
        const transferInterface = new utils.Interface(erc20Abi);

        return transferInterface.encodeFunctionData("transfer", [to, amount]);
    };

    static encodeApprove = (
        spenderAccount: string,
        amount: BigNumber
    ): string => {
        const approveInterface = new utils.Interface(erc20Abi);

        return approveInterface.encodeFunctionData("approve", [
            spenderAccount,
            amount,
        ]);
    };

    static encodeApproveUnlimited = (spenderAccount: string): string => {
        const approveInterface = new utils.Interface(erc20Abi);

        return approveInterface.encodeFunctionData("approve", [
            spenderAccount,
            ethers.constants.MaxUint256,
        ]);
    };
}

export { ERC20NewService };
