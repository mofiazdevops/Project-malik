import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IDO_URL } from "config/constants";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./stacking.css";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import abi from "./ABI/StakingABI.json";
import tokenAbi from "./ABI/TokenABI.json";
import { JsonRPCResponse } from "web3/providers";
import { LoadingScreen } from "components";
import { toInteger } from "lodash";
import { useAppContext } from "contexts";
import { AppActions, AppTypes } from "store/types";

const useStyles = makeStyles((theme: any) => {
  return {
    stakingWrapper: {
      display: "flex",
      position: "relative",
      paddingTop: "140px",
      paddingBottom: "140px",
      // width: "100%",
      // maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
      background: "#081015",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "70px",
        paddingBottom: "70px",
      },
    },
    stakingWrapper2: {
      width: "100%",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    stakingImageWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      "& img": {
        [theme.breakpoints.between("320", "1200")]: {
          maxWidth: "90%",
          height: "auto",
        },
      },
    },
    stakingCard: {
      maxWidth: "38rem",
      width: "auto",
      // background: theme.colors.primary,
      color: "#FFFFFF",
      // borderRadius: "100px 0px 0px 100px",
      // padding: "0px 30px 80px 30px",
      float: "right",
      [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
        padding: "55px 40px 40px 44px",

        float: "none",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "45px 25px 20px 25px",
        margin: "auto",
        width: "90%",
        borderRadius: "50px",
        float: "none",
      },

      "& h1": {
        fontStyle: "normal",
        margin: 0,
        fontFamily: "SF Pro Display",
        fontWeight: 700,
        fontSize: "60px",
        lineHeight: "90px",
        color: theme.colors.white,
        [theme.breakpoints.down("sm")]: {
          fontSize: "30px",
          lineHeight: "30px",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "40px",
          lineHeight: "40px",
        },
      },
      "& p": {
        color: "#D3D3D6",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "35px",
        fontFamily: "SF Pro Display",
        [theme.breakpoints.down("md")]: {
          fontSize: "0.9rem",
          lineHeight: "19px",
          marginRight: "25px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "14px",
          lineHeight: "18px",
        },
      },
      "& p:nth-child(2)": { marginTop: "3rem" },
      "& p:nth-child(3)": { marginTop: "2rem" },
    },
    note: {
      marginTop: "4.06rem",
      display: "flex",
    },
    noteItem: {
      background: theme.colors.darkBlue,
      color: theme.colors.white,
      padding: "10px 20px",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        padding: "10px 15px",
        fontSize: "12px",
      },
    },
  };
});

function LinearProgressWithLabel(props: { value: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 38 }}>
        <Typography variant="body2" color="text.secondary"></Typography>
      </Box>
    </Box>
  );
}

export default function Staking() {
  const classes: any = useStyles();
  const { dispatch, state } = useAppContext();
  const history = useHistory();
  const [key, setKey] = useState<string>("30days");
  const [progress, setProgress] = React.useState(0);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.REACT_APP_INFURA_PROJECT_ID_STAKE,
      },
    },
    // Add other providers you want to support
  };

  const web3Modal = new Web3Modal({
    network: "MAINNET", // This will switch the default network to Polygon Mumbai
    cacheProvider: true,
    providerOptions,
  });

  interface Stake {
    totalAmount: string;
    days: number;
    totalRewards: string;
  }

  const [userAddress, setUserAddress] = useState<string>("");
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [rewardPercentage, setRewardPercentage] = useState<number>(1.5);
  const [reward, setReward] = useState<number>(0);
  const [selectedDays, setSelectedDays] = useState<number>(30);
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [lockedToken, setLockedToken] = useState<number>(0);
  const [lockedDuration, setLockedDuration] = useState<number>(0);
  const [totalReward, setTotalReward] = useState<number>(0);
  const [stakingLoader, setStakingLoader] = useState<boolean>(false);
  const [rewardLoader, setRewardLoader] = useState<boolean>(false);
  const [unStakeLoader, setUnStakeLoader] = useState<boolean>(false);
  const [activeStakes, setActiveStakes] = useState<Stake[]>([]);
  const [Staking, setStaking] = useState<boolean>(false);
  const [isStakeDisabled, setIsStakeDisabled] = useState(true);

  const resetConnectionState = () => {
    setIsWalletConnected(false);
    setUserAddress("");
    localStorage.removeItem("isWalletConnected");
    console.log("Wallet Disconnected");
  };

  // Function to handle account changes
  const handleAccountsChanged = async (accounts: string | any[]) => {
    if (accounts.length === 0) {
      resetConnectionState();
      console.log(
        "Disconnected Wallet due to no account available",
        accounts.length
      );
    } else {
      connectWallet();
      setUserAddress(accounts[0]);
      setIsWalletConnected(true);
      localStorage.setItem("isWalletConnected", "true");
    }
  };

  const handleChainChanged = (chainId: string) => {
    resetConnectionState();
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []);

  const handleStakeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!value || value.match(/^\d*\.?\d*$/)) {
      setIsStakeDisabled(Number(value) < 100);
      setStakeAmount(Number(value));
      calculateReward();
    }
  };

  useEffect(() => {
    calculateReward();
  }, [stakeAmount, selectedDays]);

  useEffect(() => {
    async function checkWalletAndFetchData() {
      const isWalletConnected = localStorage.getItem("isWalletConnected");
      setIsWalletConnected(Boolean(isWalletConnected));
      if (Boolean(isWalletConnected) === true) {
        try {
          const provider = await web3Modal.connect();
          const web3Provider = new ethers.providers.Web3Provider(provider);
          const signer = web3Provider.getSigner();
          const address = await signer.getAddress();
          setUserAddress(address);
          // Check the current network
          const currentNetwork = await web3Provider.getNetwork();
          const targetNetworkId = 0x89; // Replace with the desired network ID (e.g., 1 for Ethereum Mainnet)

          if (currentNetwork.chainId !== targetNetworkId) {
            // Request to switch network in MetaMask
            connectWallet();
          }
          getData(signer, address);
        } catch (error) {
          console.error("Error connecting to wallet or fetching data:", error);
        }
      }
    }

    checkWalletAndFetchData();
  }, []);

  const calculateReward = () => {
    const rewardTokens = (stakeAmount * rewardPercentage) / 100;
    setReward(rewardTokens);
  };

  const displayValue = (value: any) => (isWalletConnected ? value : "***");

  const handleSelect = (k: string | null) => {
    if (k) {
      setKey(k);
      // Update the selectedDays state based on the selected tab
      switch (k) {
        case "30days":
          setSelectedDays(30);
          setRewardPercentage(1.5);
          break;
        case "90days":
          setSelectedDays(90);
          setRewardPercentage(2);
          break;
        case "180days":
          setSelectedDays(180);
          setRewardPercentage(2.5);
          break;
        // case "365days":
        //   setSelectedDays(365);
        //   setRewardPercentage(60);
        //   break;
        default:
          setSelectedDays(0);
      }
    }
  };

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);

      // Get the user's address
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      setUserAddress(address);
      setIsWalletConnected(true);
      localStorage.setItem("isWalletConnected", "true");
      getData(signer, address);

      const { chainId } = await web3Provider.getNetwork();

      if (chainId !== 0x89) {
        // 80002 is the chain ID for Polygon amoy
        try {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x89" }],
          });
        } catch (switchError: any) {
          // This error code indicates that the chain has not been added to MetaMask
          if (switchError.code === 4902) {
            try {
              await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x89",
                    chainName: "Polygon",
                    rpcUrls: [process.env.REACT_APP_RPC_URL],
                    blockExplorerUrls: [process.env.REACT_APP_EXPLORER_URL],
                    nativeCurrency: {
                      name: "MAINNET",
                      symbol: "POL",
                      decimals: 18,
                    },
                  },
                ],
              });
            } catch (addError) {
              console.error("Failed to add the network", addError);
            }
          } else {
            console.error("Failed to switch to the network", switchError);
          }
        }
      }
    } catch (e: any) {
      console.error(e);
    }
  };

  const createStake = async () => {
    try {
      setStaking(true);
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();

      const stakingContract = await new ethers.Contract(
        String(process.env.REACT_APP_STAKING_CONTRACT),
        abi,
        signer
      );

      console.log(stakingContract, "this is staking contract");

      const tokenContract = await new ethers.Contract(
        String(process.env.REACT_APP_TOKEN_CONTRACT),
        tokenAbi,
        signer
      );

      const approvalTx = await tokenContract.approve(
        String(process.env.REACT_APP_STAKING_CONTRACT),
        ethers.utils.parseUnits(String(stakeAmount), "ether")
      );

      setStakingLoader(true);
      await approvalTx.wait();
      setStakingLoader(false);

      console.log(selectedDays * 86400, "these are selected days");
      // const depositTx = await stakingContract.deposit(stakeAmount);

      const stakingTx = await stakingContract.stake(
        // ethers.utils.parseUnits(String(stakeAmount), "ether"),
        toInteger(stakeAmount),
        selectedDays * 86400
      );

      setStakingLoader(true);
      await stakingTx.wait();
      setStakingLoader(false);
      setStaking(false);

      // Dispatch success alert with transaction hash
      dispatch({
        type: AppTypes.AlertModal,
        payload: {
          show: true,
          title: "Successful",
          body: `Staking added successfully! 🎉`,
        },
      });

      setStakeAmount(0);
      getData(signer, address);
    } catch (error) {
      setStaking(false);
      console.error("Failed to get stake tokens:", error);
      // Dispatch error alert
      dispatch({
        type: AppTypes.AlertModal,
        payload: {
          show: true,
          title: "Error",
          body: "An error occurred during the Staking. Please try again",
        },
      });
    }
  };

  const claimReward = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      const stakingContract = new ethers.Contract(
        String(process.env.REACT_APP_STAKING_CONTRACT),
        abi,
        signer
      );

      const claimRewardTx = await stakingContract.claimReward();
      setRewardLoader(true);
      await claimRewardTx.wait();
      setRewardLoader(false);

      getData(signer, address);
    } catch (error) {
      console.error("Failed to claim reward tokens:", error);
    }
  };

  const unStake = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      const stakingContract = new ethers.Contract(
        String(process.env.REACT_APP_STAKING_CONTRACT),
        abi,
        signer
      );

      const claimRewardTx = await stakingContract.unStakeToken();
      setUnStakeLoader(true);
      await claimRewardTx.wait();
      setUnStakeLoader(false);

      getData(signer, address);
    } catch (error) {
      console.error("Failed to unstake tokens:", error);
    }
  };

  const getData = async (
    signer: ethers.providers.Provider | ethers.Signer | undefined,
    address: string
  ) => {
    try {
      const stakingContract = new ethers.Contract(
        String(process.env.REACT_APP_STAKING_CONTRACT),
        abi,
        signer
      );

      // Call the contract function
      const details = await stakingContract.stakes(address, 0);
      const stakedToken = ethers.utils.formatEther(details.amount);
      setLockedToken(Number(stakedToken));

      const days = details?.timeLeft
        ? Math.floor(details.ONE_MONTH / (3600 * 24))
        : 0;
      setLockedDuration(days);

      const daysLeft = details?.timeLeft
        ? Math.floor(details.timeLeft / (3600 * 24))
        : 0;
      setDaysLeft(Number(daysLeft));

      const rewardTokens = ethers.utils.formatEther(details.reward);
      setTotalReward(Number(stakedToken) + Number(rewardTokens));

      const progress = days > 0 ? ((days - daysLeft) / days) * 100 : 0;
      const intValue = Math.round(progress);
      setProgress(intValue);

      // Get active stakes
      const activeStakesData = await stakingContract.getStakes(address);
      setActiveStakes(
        activeStakesData.map(
          (stake: {
            amount: { toString: () => ethers.BigNumberish };
            endTime: number;
            reward: { toString: () => ethers.BigNumberish };
          }) => {
            const currentTime = Math.floor(Date.now() / 1000);
            const timeDifferenceInSeconds = stake.endTime - currentTime;
            const daysRemaining = timeDifferenceInSeconds / (3600 * 24);

            // Convert days to months (assuming 30 days in a month)
            const monthsRemaining = daysRemaining / 30;

            // Decide whether to display days or months based on the value
            const readableTime =
              monthsRemaining > 1
                ? `${Math.ceil(monthsRemaining)} months`
                : daysRemaining > 0
                ? `${Math.ceil(daysRemaining)} day${
                    Math.ceil(daysRemaining) > 1 ? "s" : ""
                  }`
                : "Expired";

            return {
              // totalAmount: ethers.utils.formatEther(stake.amount.toString()),
              totalAmount: stake.amount.toString(),
              days: readableTime,
              totalRewards: stake.reward.toString(),
            };
          }
        )
      );
    } catch (error) {
      console.error("Failed to get stake details:", error);
    }
  };

  return (
    <>
      {/* <Staking /> */}
      <div className={classes.stakingWrapper}>
        <div className={classes.stakingWrapper2}>
          <Grid container spacing={1}>
            <Grid item lg={5} md={5} xs={12}>
              <div className={classes.stakingCard}>
                <h1>Staking</h1>
                <p>
                  Staking is the process of delegating or locking up crypto
                  holdings to earn rewards. By staking their IDEA tokens, users
                  not only contribute to the ecosystems growth but also benefit
                  from attractive APY rewards based on the duration of their
                  stake.
                </p>
                <p>
                  The primary benefit of staking is that you earn more crypto,
                  and interest rates can be very generous. Its potentially a
                  very profitable way to invest your money.
                </p>
              </div>
            </Grid>
            <Grid item lg={7} md={6} xs={11}>
              <div className="container">
                <div className="row pt-lg-5 pt-md-4 pt-3">
                  <div className="col-lg-6 col-md-6 col-12 g-0">
                    <div className="d-flex justify-content-end">
                      {stakingLoader ? (
                        <div className="staking_box_loader mt-lg-5 mt-md-4 mt-3 mb-3">
                          <div className="d-flex justify-content-center align-items-center h-100">
                            <div
                              className="spinner-grow"
                              style={{
                                width: "3rem",
                                height: "3rem",
                                color: "#A7CAED",
                              }}
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="staking_box mt-lg-5 mt-md-4 mt-3 mb-3">
                          <div className="text-center">
                            <h5 className="stake_with_ideaology_title mb-3">
                              Stake With Ideaology
                            </h5>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="stakeInput"
                              className="staking_input_fields_label pb-1"
                            >
                              How much you want to stake with us?
                            </label>
                            <br />
                            <input
                              type="text"
                              id="stakeInput"
                              name="stakeInput"
                              placeholder="Enter amount of 100 $IDEA to stake"
                              className="w-100 staking_input_fields"
                              value={stakeAmount}
                              onChange={handleStakeInputChange}
                              typeof="number"
                            />
                          </div>
                          <div>
                            <p className="prefferable_time_p mb-1">
                              Select prefferable time period for staking?
                            </p>
                            <Tabs
                              id="controlled-tab-example"
                              activeKey={key}
                              onSelect={handleSelect}
                              className="mb-3"
                            >
                              <Tab eventKey="30days" title="30 Days"></Tab>
                              <Tab eventKey="90days" title="90 Days"></Tab>
                              <Tab eventKey="180days" title="180 Days"></Tab>
                            </Tabs>
                          </div>
                          <div>
                            <label
                              htmlFor="rewardInput"
                              className="staking_input_fields_label pb-1"
                            >
                              Your Reward ({rewardPercentage}%)
                            </label>
                            <br />
                            <input
                              type="text"
                              id="rewardInput"
                              name="rewardInput"
                              className="w-100 staking_input_fields"
                              value={reward}
                              disabled
                            />
                          </div>
                          <div className="pt-3">
                            <button
                              className="w-100 start_staking_btn"
                              // disabled={stakeAmount == 0}
                              disabled={isStakeDisabled || Staking}
                              style={{
                                backgroundColor: isStakeDisabled
                                  ? "gray"
                                  : "#0c71bc",
                              }}
                              onClick={createStake}
                            >
                              {Staking ? "Staking...." : "Start Staking"}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="d-flex justify-content-start">
                      <div className="staking_progress_box ms-2">
                        {rewardLoader ? <LoadingScreen /> : <></>}
                        <div className="text-center">
                          <h5 className="stake_with_ideaology_title mb-lg-3 mb-md-3 mb-3">
                            Upcoming Stake
                          </h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0 locking_amount">Locked Amount</p>
                          <p className="mb-0 loading_amount_token">
                            {displayValue(lockedToken)} $IDEA
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0 locking_amount">Unlock Days</p>
                          <p className="mb-0 loading_amount_token">
                            {displayValue(lockedDuration)} Days
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0 locking_amount">
                            Total Tokens to Claim
                          </p>
                          <p className="mb-0 loading_amount_token">
                            {displayValue(totalReward)} $IDEA
                          </p>
                        </div>
                        <div>
                          <div className="border_top_bottom_stake py-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="mb-0 progress_amount_token">
                                Progress
                              </p>
                              <p className="mb-0 progress_amount_token">
                                {progress}%
                              </p>
                            </div>
                            <div className="py-2">
                              <Box sx={{ width: "100%" }}>
                                <LinearProgressWithLabel value={progress} />
                              </Box>
                            </div>
                            <div>
                              <p className="mb-0 locking_amount">
                                Claimable in {displayValue(daysLeft)} Days
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="pt-3">
                          <div className="d-flex align-items-center justify-content-between">
                            {isWalletConnected ? (
                              <></>
                            ) : (
                              <button
                                className="w-100 claim_staking_btn"
                                onClick={() => connectWallet()}
                              >
                                Connect
                              </button>
                            )}
                            {rewardLoader ? (
                              <button
                                className="w-100 start_staking_btn"
                                disabled={true}
                                onClick={createStake}
                              >
                                ...
                              </button>
                            ) : (
                              <button
                                className="w-100 claim_staking_btn d-none"
                                disabled={!isWalletConnected || progress < 100}
                                onClick={claimReward}
                              >
                                Claim Staking
                              </button>
                            )}
                            {unStakeLoader ? (
                              <button
                                className="w-100 start_staking_btn"
                                disabled={true}
                                onClick={createStake}
                              >
                                ...
                              </button>
                            ) : (
                              <button
                                className="w-100 claim_staking_btn ms-3"
                                disabled={!isWalletConnected}
                                onClick={unStake}
                              >
                                Unstake
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mt-lg-4 mt-md-3 mt-3">
                      {activeStakes.length > 0 && isWalletConnected ? (
                        <div className="staking_progress_box ms-2">
                          <div className="text-center">
                            <h5 className="stake_with_ideaology_title mb-lg-3 mb-md-3 mb-3">
                              My Stakes
                            </h5>
                          </div>
                          <div className="table_overflow">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col" className="table_heading_th">
                                    Amount
                                  </th>
                                  <th scope="col" className="table_heading_th">
                                    Days
                                  </th>
                                  <th scope="col" className="table_heading_th">
                                    Reward
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {activeStakes.map((stake, index) => (
                                  <tr key={index}>
                                    <td className="table_data_td">
                                      {stake.totalAmount}
                                    </td>
                                    <td className="table_data_td">
                                      {stake.days}
                                    </td>
                                    <td className="table_data_td">
                                      {stake.totalRewards} IDEA
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ) : (
                        <div className="staking_progress_box ms-2">
                          <div className="text-center">
                            <h5 className="stake_with_ideaology_title mb-lg-3 mb-md-3 mb-3">
                              No Active Stakes
                            </h5>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
