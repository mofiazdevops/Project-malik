import React, { Dispatch, useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";

import styled from "@emotion/styled";
import { AppActions, AppTypes } from "store/types";

import { useEagerConnect, useInactiveListener } from "hooks/injectedHook";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { useAppContext } from "contexts";
import { getPosClient } from "utils/posClient";
import { ethToWei, weiToEth } from "utils";
import Swap from "./swap";
import { PrivatePosClient } from "utils/PrivatePOSClient";
import { ETHTokenContract } from "services/swap/eth/contract";
import { POLTokenContract } from "services/swap/polygon/contract";
import { ethers } from "ethers";

const Wrapper = styled.div`
  margin: 2.5rem;
`;

interface IPadding {
  padding?: boolean;
}
const Padding = styled.div<IPadding>`
  padding: ${(props) => (props?.padding ? "24px" : "0.1rem")};
  backdrop-filter: blur(16px);
  border-radius: 12px;
  border: 1px solid #e0d8d8;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  padding-bottom: 12px;
  color: #0a0b0d;
`;

const Subtitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #52555d;
  padding-bottom: 36px;
  margin-right: 127px;
`;

const Heading = styled.h5`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 800;
  color: #061024;
  margin-bottom: 0.5rem;
`;

const Switcher = styled.div`
  background-color: #add3ef;
  border-radius: 8px;
  height: 44px;
  padding: 4px;
  justify-content: space-between;
  display: flex;
`;

interface ITab {
  active?: boolean;
}
const Tab = styled.div<ITab>`
  display: flex;
  align-items: center;
  height: 36px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#fff" : "#000")};
  background-color: ${(props) => (props.active ? "#0C71BC" : "#fff")};
  box-shadow: ${(props) =>
    props.active ? "0 1px 4px rgba(0,0,0,.08)" : "0 1px 4px rgba(0,0,0,.08)"};
  border-radius: ${(props) => (props.active ? "4px" : "4px")};
  width: 49%;
  span {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Content = styled.div`
  margin-bottom: 2rem;
`;

const GroupButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
  height: 44px;
  border: 1px solid #dddfe0;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  align-self: center;
  input {
    padding: 10px 16px;
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 0.5rem;
    overflow: visible;
    outline: none;
  }
`;

const PrimaryButton = styled.button`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14px;
  display: block;
  width: 100%;
  color: #fff;
  background-color: #0c71bc;
  cursor: pointer;
  outline: none;
  border: none;
`;

const Input = styled.input`
  :disabled {
    background: #eae7e7;
    cursor: not-allowed;
    width: 100%;
  }
`;

export const injected = new InjectedConnector({
  supportedChainIds: [1],
});

const getErrorMessage = (error: Error, dispatch: Dispatch<AppActions>) => {
  if (error instanceof NoEthereumProviderError) {
    dispatch({
      type: AppTypes.AlertModal,
      payload: {
        show: true,
        title: "MetaMask",
        body: "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.",
      },
    });
    // return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    dispatch({
      type: AppTypes.SwitchNetworkModal,
      payload: {
        show: true,
        // title: "MetaMask",
        // body: "You're connected to an unsupported network.",
        network: "1",
      },
    });
    // return "You're connected to an unsupported network.";
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    dispatch({
      type: AppTypes.AlertModal,
      payload: {
        show: true,
        title: "MetaMask",
        body: "Please authorize this website to access your Ethereum account.",
      },
    });
    // return "Please authorize this website to access your Ethereum account.";
  } else {
    // console.error("Hello", error);
    dispatch({
      type: AppTypes.AlertModal,
      payload: {
        show: true,
        title: "MetaMask",
        body: "Request already in progress. Check the console for more details.",
      },
    });
    // return "An unknown error occurred. Check the console for more details.";
  }
};

export default function GetSTAKE() {
  const context = useWeb3React<Web3Provider>();
  const {
    account,
    activate,
    active,
    chainId,
    connector,
    deactivate,
    error,
    library: provider,
  } = context;
  const { dispatch, state } = useAppContext();

  const [activatingConnector, setActivatingConnector] = React.useState<any>();

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  // useEffect
  const currentConnector = injected;
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  useEffect(() => {
    setActivatingConnector(currentConnector);
    activate(injected);
  }, [activate, currentConnector]);

  if (error) {
    getErrorMessage(error, dispatch);
  }

  // const [activeTab, setactiveTab] = useState(true);
  const [swapAmount, setSwapAmount] = useState<string>("0");
  const [isloading, setIsloading] = useState<boolean>(false);

  const [trx, setTrx] = useState<string>("");
  const [isTrxloading, setIsTrxloading] = useState<boolean>(false);

  const [userIDEABalance, setuserIDEABalance] = useState<number>(0);
  const [companyBalance, setCompanyBalance] = useState<number>(0);
  const [companyMatic, setCompanyMatic] = useState<number>(0);

  useEffect(() => {
    if (!account || !provider) {
      return;
    }
    getIDEABalance(account);
    CompanyBalanceOnPolygon();
    checkMaticBalanceCompany();
  }, [account, provider]);

  const Reset = () => {
    setSwapAmount("0");
    setIsloading(false);
    setIsTrxloading(false);
  };

  const getIDEABalance = async (account: any) => {
    const tokenContract = new ETHTokenContract(
      provider,
      account,
      process.env.REACT_APP_ROOT_ETH_IDEA_Token || ""
    );
    const balance = await tokenContract.balanceOf(account);
    const ethersValue = weiToEth(balance);
    setuserIDEABalance(Number(parseFloat(ethersValue || "0")?.toFixed(3)));
  };

  const CompanyBalanceOnPolygon = async () => {
    const tokenContract = new POLTokenContract();
    const balance = await tokenContract.balanceOf(
      process.env.REACT_APP_SWAP_ACCOUNT_PUBLICADDRESSOF_PRIVATE_KEY || ""
    );
    const ethersValue = weiToEth(balance);
    setCompanyBalance(Number(parseFloat(ethersValue || "0")?.toFixed(3)));
  };

  async function checkMaticBalanceCompany() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mainnet.infura.io/v3/4fdbb10d4d9044d4b73218df36f2baa3"
      );

      // Get the MATIC balance of the address
      const balanceWei = await provider.getBalance(
        process.env.REACT_APP_SWAP_ACCOUNT_PUBLICADDRESSOF_PRIVATE_KEY || ""
      );

      // Convert the balance from Wei to MATIC
      const balanceMatic = ethers.utils.formatUnits(balanceWei, "ether");
      setCompanyMatic(Number(parseFloat(balanceMatic || "0")?.toFixed(3)));
    } catch (error) {
      console.error("Error checking MATIC balance:", error);
    }
  }

  const submit = async () => {
    try {
      setIsloading(true);
      const ideaValue = userIDEABalance;
      const _swapAmount = parseFloat(swapAmount);
      if (parseFloat(swapAmount) === 0) {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "Low Balance",
            body: "Please enter swap amount",
          },
        });
        setIsloading(false);
        return;
      } else if (ideaValue - 10 < _swapAmount) {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "Low Balance",
            body: "You don't have enough IDEA balance",
          },
        });
        setIsloading(false);
        return;
      } else if (companyBalance < _swapAmount) {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "Low Balance",
            body: "The required exchange value is not available in wallet, Please try after 24 hours",
          },
        });
        setIsloading(false);
        return;
      } else if (companyMatic < 1) {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "Low Balance",
            body: "The required exchange value is not available in wallet, Please try after 24 hours",
          },
        });
        setIsloading(false);
        return;
      }

      if (!account || !provider) {
        return;
      }

      const EtherToWei = ethToWei(_swapAmount.toString());

      const tokenContract = new ETHTokenContract(
        provider,
        account,
        process.env.REACT_APP_ROOT_ETH_IDEA_Token || ""
      );
      const result = await tokenContract.transfer(EtherToWei);

      if (result.status === 1) {
        try {
          const poltokenContract = new POLTokenContract();
          const polresult = await poltokenContract.transfer(
            account,
            EtherToWei
          );
          dispatch({
            type: AppTypes.AlertModal,
            payload: {
              show: true,
              title: "Please save transaction hash, it may tak one hour",
              body: `${polresult.hash}`,
            },
          });
          Reset();
        } catch (error: any) {
          Reset();
          dispatch({
            type: AppTypes.AlertModal,
            payload: {
              show: true,
              title: "Execution Reverted, Contact Ideaology",
              body: error?.message,
            },
          });

          //email code here
        }
      }
    } catch (error: any) {
      Reset();
      if (
        error.message.includes(
          "execution reverted: SafeERC20: low-level call failed"
        )
      ) {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "Execution Reverted",
            body: `An error occurred: SafeERC20 low-level call failed.`,
          },
        });
      } else {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "Execution Reverted",
            body: error?.message,
          },
        });
      }

      setIsloading(false);
    }
  };

  const onCheckTransactionStatus = async () => {
    try {
      if (!account || !provider) {
        return;
      }

      if (!trx) {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "Null Values",
            body: `Please enter the transaction hash`,
          },
        });
      }
      setIsTrxloading(true);
      const pol_provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mainnet.infura.io/v3/4fdbb10d4d9044d4b73218df36f2baa3"
      );

      const receipt = await pol_provider.getTransactionReceipt(trx);

      if (receipt) {
        // Check if the transaction was successful
        if (receipt.status === 1) {
          dispatch({
            type: AppTypes.AlertModal,
            payload: {
              show: true,
              title: "Success!",
              body: `Transaction succeeded!`,
            },
          });
        } else {
          dispatch({
            type: AppTypes.AlertModal,
            payload: {
              show: true,
              title: "Failed!",
              body: `Transaction failed!`,
            },
          });
        }
      } else {
        dispatch({
          type: AppTypes.AlertModal,
          payload: {
            show: true,
            title: "Not Found",
            body: `Transaction not found. It may still be pending.`,
          },
        });
      }
    } catch (error: any) {
      dispatch({
        type: AppTypes.AlertModal,
        payload: {
          show: true,
          title: "Faile",
          body: `${error?.message}`,
        },
      });
      setIsTrxloading(false);
    } finally {
      setIsTrxloading(false);
    }
  };

  const onChange = async (e: any) => {
    if (!account || !provider) {
      return;
    }

    if (!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,5})?$/)) {
      setSwapAmount(e.target.value);
    } else {
      swapAmount;
    }
  };

  return (
    <section style={{ marginTop: "8rem" }}>
      <Container>
        <Wrapper>
          <Row>
            <Col xs={12} lg={6}>
              <Padding padding={true}>
                <Title>Swap IDEA</Title>
                <Subtitle>
                  {" "}
                  Token address on polygon.{" "}
                  {process.env.REACT_APP_POLYGON_IDEA_SWAP}
                </Subtitle>
                <Swap
                  swapAmount={swapAmount}
                  onChange={onChange}
                  submit={submit}
                  isloading={isloading}
                  account={account}
                  ideaBalance={userIDEABalance | 0}
                />
              </Padding>
            </Col>
            <Col xs={12} lg={6}>
              <Padding padding={true}>
                {/* <TableData /> */}
                <Content>
                  <Title>Check Transaction</Title>
                  <Subtitle>
                    {" "}
                    Verify if a recent transaction was successful by confirming
                    proper processing and accurate fund crediting to the
                    designated account.{" "}
                  </Subtitle>
                  <Heading>Transaction Hash</Heading>
                  <GroupButton>
                    <InputBox>
                      <Input
                        value={trx}
                        onChange={(e) => setTrx(e.target.value)}
                        type="text"
                        placeholder="Please enter transaction hash"
                      />
                      {/* <InputBoxPaste  >Paste</InputBoxPaste> */}
                    </InputBox>
                  </GroupButton>
                </Content>
                <PrimaryButton onClick={onCheckTransactionStatus}>
                  {isTrxloading ? "...Confirming" : "Submit"}
                </PrimaryButton>
              </Padding>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </section>
  );
}
