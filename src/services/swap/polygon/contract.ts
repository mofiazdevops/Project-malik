import { Contract, Wallet, ethers, providers } from "ethers";
import ABI from "./abi.json";
import { getLogger } from "utils/logger";
import { Maybe } from "types";

const logger = getLogger("Services::Erc20");

class POLTokenContract {
  provider: providers.JsonRpcProvider;
  wallet: Wallet;
  contract: Contract;

  constructor() {
    const infuraUrl = `https://polygon-mainnet.infura.io/v3/4fdbb10d4d9044d4b73218df36f2baa3`;

    this.provider = new ethers.providers.JsonRpcProvider(infuraUrl);
    this.wallet = new ethers.Wallet(
      process.env.REACT_APP_SWAP_ACCOUNT_PRIVATE_KEY || "",
      this.provider
    );

    if (!this.wallet.address) {
      throw new Error("Invalid private key provided.");
    }
    this.contract = new ethers.Contract(
      process.env.REACT_APP_POLYGON_IDEA_SWAP || "",
      ABI,
      this.wallet
    );
  }

  async transfer(to: string, amount: any): Promise<any> {
    try {
      // const gasPriceGwei = 500; // Adjust this to a value that suits your needs
      // const gasPriceWei = ethers.utils.parseUnits(gasPriceGwei.toString(), 'gwei');
      // const gasLimit = 200000;
      const gasPrice = await this.provider.getGasPrice();
      const result = await this.contract.transfer(to, amount, {
        gasPrice: gasPrice,
        // Add other options as needed
      });

      return result;
    } catch (error) {
      logger.error("Error during transfer:", error);
      throw error;
    }
  }

  async balanceOf(address: string): Promise<any> {
    try {
      const result = await this.contract.balanceOf(address);
      logger.info(`Balance of ${address}: ${result}`);
      return result;
    } catch (error) {
      logger.error("Error during balanceOf:", error);
      throw error;
    }
  }

  async estimateGasLimit(to: string, amount: any): Promise<number> {
    const estimatedGas = await this.provider.estimateGas({
      to: this.contract.address,
      data: this.contract.interface.encodeFunctionData("transfer", [
        to,
        amount,
      ]),
    });
    return estimatedGas.toNumber();
  }
}

export { POLTokenContract };
