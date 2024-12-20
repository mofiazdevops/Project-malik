import { BigNumber } from "ethers";

export const ZERO_NUMBER = BigNumber.from(0);

export const getPercent = (dividend: BigNumber, divisor: BigNumber): number => {
  return dividend.mul(100).div(divisor).toNumber();
};
