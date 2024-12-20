import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { Dispatch, useEffect, useState } from "react";
import backgroundImage from "../../assets/pngs/projectscac/projectbackground.png";
import clouds from "../../assets/pngs/projectscac/clouds.png";
import blueBackground from "../../assets/pngs/projectscac/blueBackground.png";
import logo from "../../assets/pngs/projectscac/projectlogo.png";
import { useHistory, useParams } from "react-router-dom";
import { Web3Provider } from "@ethersproject/providers";
import { AppActions, AppTypes } from "store/types";

import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import moment from "moment";
import { useEagerConnect, useInactiveListener } from "hooks/injectedHook";
import { ethers } from "ethers";
import { useAppContext } from "contexts";
import { getPoolsById } from "services/api";

import PoolService from "services/newpool";
import { ERC20NewService } from "services/erc20New";

// For Wallet Validation
export const injected = new InjectedConnector({
  supportedChainIds: [3, 4, 80001, 97],
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
      type: AppTypes.AlertModal,
      payload: {
        show: true,
        title: "MetaMask",
        body: "You're connected to an unsupported network.",
      },
    });
    // return "You're connected to an unsupported network.";
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    dispatch({
      type: AppTypes.AlertModal,
      payload: {
        show: true,
        title: "MetaMask",
        body: "Please authorize this website to access your Polygon account.",
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

interface PoolDetails {
  status: string;
  deployStatus: boolean;
  poolId: number;
  applicationId: ApplicationDetails;
  address: string;
  account: string;
  chain: string;
  chainId: number;
  tradeValue: number;
  fundType: string;
  access: number;
  minAlloc: number;
  maxAlloc: number;
  startDate: string;
  endDate: string;
  claimDate: string;
  tokenPrice: number;
  contractAddress: string;
  meta: {
    logo: string;
    cover: string;
  };
}

interface ApplicationDetails {
  website: string;
  whitepaper: string;
  twitter: string;
  telegram: string;
  tokenInfo: string;
  desc: string;
  github: string;
  sod: string;
  totalRaise: number;
  alreadyRaised: string;
  status: string;
  poolCreated: boolean;
  projectName: string;
  linkedin: string;
  launchDate: string;
  createdAt: string;
  updatedAt: string;
  whitelisting: string;
}

const initialState = {
  totalSupply: "...",
  tokenForSale: "...",
  toBeRaised: "...",
  tokenPrice: "...",
  totalOwed: "...",
  percentage: 0,
  valuedDate: "...",
  symbol: "...",
};

interface intialStatePROPS {
  totalSupply: string;
  tokenForSale: string;
  toBeRaised: string;
  tokenPrice: string;
  totalOwed: string;
  percentage: number;
  valuedDate: string;
  symbol: string;
}

const PoolDetail = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<intialStatePROPS>(initialState);
  const [pools, setPools] = useState<PoolDetails>();

  const { dispatch, state } = useAppContext();

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

  error && getErrorMessage(error, dispatch);

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  // useEffect
  const currentConnector = injected;
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;
  // console.log("Connected", disabled);

  const dateComparision = (startDate: number, endDate: number): string => {
    const cd = new Date();
    const currentTime = moment(cd).utc().unix();
    // console.log("Current time", currentTime);
    if (currentTime > startDate) {
      if (currentTime < endDate) {
        const diff = endDate - currentTime;
        const inDays = Math.trunc(diff / 3600 / 24);
        const inHours = Math.trunc(diff / 3600);
        // console.log("inDays", inDays);
        return `Pool in process ${inDays} days, ${inHours} hours`;
      } else {
        // console.log("Pool ended");
        const diff = currentTime - endDate;
        const inDays = Math.trunc(diff / 3600 / 24);
        const inHours = Math.trunc(diff / 3600);
        // console.log("inDays", inDays);
        return `Finished in ${inDays} days, ${inHours} hours`;
      }
    } else {
      // console.log("Pool not started");
      const diff = startDate - currentTime;
      // const inYears = Math.trunc
      const inDays = Math.trunc(diff / 3600 / 24);
      const inHours = Math.trunc(diff / 3600);
      // console.log("inDays", inDays);
      return `Registration opens in ${inDays} days, ${inHours} hours`;
    }
  };

  const weiToEth = (n: string): string => {
    // console.log("n", n);
    if (n === "0") {
      return "0";
    }
    const ethValue = ethers.utils.formatEther(n);
    // console.log("ethValue", ethValue);
    return ethValue;
  };

  const getBlockChainData = async (contractAddress: string) => {
    // console.log("Inside blockchain func");

    const otherProvider = ethers.getDefaultProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545"
    );
    const poolServices = new PoolService(
      otherProvider,
      (account && account) || "",
      contractAddress
    );
    // console.log("Pool Services", poolServices);
    // console.log("Contract Address", contractAddress);

    const tokenAddress = await poolServices.tokenAddress();
    // console.log("TokeAddress", tokenAddress);

    const erc20Service = new ERC20NewService(
      otherProvider,
      (account && account) || "",
      tokenAddress
      // account,
      // props.pool.address
      // "0xba3c0e50e134d4e1aefa26c28e59cf25f2539aef" //working
      //'0xbb48Ac1418BE381c7fa7421D87219fB8BF7469A4'
    );
    // console.log("ERC20", erc20Service);

    const getTotalSupply = await erc20Service.getTotalSupply();
    const totalSupply = getTotalSupply.toString();
    // console.log("maxWei", totalSupply.toString());

    const getTokenForSale = await poolServices.contract.tokenTarget();
    const tokenForSale = getTokenForSale.toString();

    const getToBeRaised = await poolServices.contract.maxWei();
    const toBeRaised = getToBeRaised.toString();

    const getTotalOWed = await poolServices.contract.totalOwed();
    const totalOwed = getTotalOWed.toString();
    // console.log("totalOwed", totalOwed);

    const startTime = await poolServices.startTime();
    // console.log("Start Time", startTime.toString());

    const endTime = await poolServices.endTime();
    // console.log("End Time", endTime.toString());

    const claimTime = await poolServices.claimTime();
    // console.log("Claim Time", claimTime.toString());

    const symbol = await erc20Service.contract.name();

    // console.log("symbol", symbol);

    const valuedDate = await dateComparision(
      startTime.toString(),
      endTime.toString()
    );
    // console.log("ValueDate", valuedDate);

    const percentage = (await (Number(totalOwed) / Number(totalSupply))) * 100;
    // console.log("Percentage", percentage);
    setData({
      ...data,
      totalSupply: weiToEth(totalSupply),
      tokenForSale: tokenForSale,
      toBeRaised: toBeRaised,
      totalOwed: totalOwed,
      valuedDate: valuedDate,
      symbol: symbol,
    });
  };

  useEffect(() => {
    // setInProgress(true);

    getPoolsById(id)
      .then(async (response) => {
        // setInProgress(false);
        // console.log("response", response);
        // console.log("response dataaaaa", response.data.contractAddress);
        await setPools(response.data);
        await getBlockChainData(response.data.contractAddress);
      })
      .catch((err) => {
        console.error(err);
        // console.log("err", err);
        // setPoolError(err.response.data.message);
        // setInProgress(false);
      })
      .finally(() => {
        // setInProgress(false);
      });
  }, [id]);

  // console.log("Id", id);

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <img
            alt="background"
            className={classes.tokenImage}
            src={backgroundImage}
          />
        </div>
      </div>
      <Container>
        <Grid container>
          <Grid className={classes.gridItem} item xs={12}>
            <div>
              <h1>Cryptoid Admin Coin</h1>
              <span className={classes.symbol}>$CAC</span>
            </div>
            <div>
              <img alt={"icon"} className={classes.icon} src={logo} />
            </div>
          </Grid>
          <Grid alignItems="flex-start" container spacing={3}>
            <Grid className={`${classes.gridItem}`} item md={6} xs={12}>
              <div className={classes.breakWork}>
                <p>
                  The native digital cryptographically-secured fungible token of
                  World of Cryptoids (ticker symbol $CAC) is a transferable
                  representation of attributed governance and utility functions
                  specified in the protocol/code of World of Cryptoids, and
                  which is designed to be used solely as an interoperable
                  utility token on the games ecosystem. <br></br>
                  <br></br>$CAC is a functional token which will be used in a
                  variety of ways including the incentives to contribute to the
                  ecosystem and a variety of other means.
                </p>
                <div className={classes.link}>
                  <span>Website: </span>
                  <a
                    className={classes.breakWork}
                    href={"https://cryptoids.world"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    https://cryptoids.world
                  </a>
                </div>
                <div className={classes.link}>
                  <span>Whitepaper: </span>
                  <a
                    className={classes.breakWork}
                    href={
                      "https://cryptoids.gitbook.io/whitepaper/cryptoids/overview"
                    }
                    rel="noreferrer"
                    target="_blank"
                  >
                    https://cryptoids.gitbook.io/whitepaper/cryptoids/overview
                  </a>
                </div>
                <div className={classes.link}>
                  <span>Whitelist: </span>
                  <a
                    className={classes.breakWork}
                    href={"https://forms.gle/9uk7nNPHPNxTzbuW6"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    https://forms.gle/9uk7nNPHPNxTzbuW6
                  </a>
                </div>
                <div className={classes.link}>
                  <span>Token details: </span>
                  <a
                    className={classes.breakWork}
                    href={
                      "https://cryptoids.gitbook.io/whitepaper/cryptoids/tokenomics/usdcac-token"
                    }
                    rel="noreferrer"
                    target="_blank"
                  >
                    https://cryptoids.gitbook.io/whitepaper/cryptoids/tokenomics/usdcac-token
                  </a>
                </div>
              </div>
            </Grid>
            <Grid
              className={`${classes.gridItem} ${classes.box}`}
              item
              md={5}
              xs={12}
            >
              <div>
                <h4>Total supply</h4>
                <h4>Tokens for sale</h4>
                <h4>To be raised</h4>
                <h4>Token price</h4>
                <h4>Individual allocation</h4>
                <h4>Listing</h4>
                <h4>IDO Time</h4>
              </div>
              <div>
                <h4>500,000,000 CAC</h4>
                <h4>2,000,000 CAC</h4>
                <h4>$100,000</h4>
                <h4>US$0.05</h4>
                <h4>$100-300</h4>
                <h4>PancakeSwap</h4>
                <h4>TBA</h4>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginTop: "64px",
  },
  wrapper: {
    marginBottom: "64px",
  },
  imgContainer: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  tokenImage: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      objectFit: "contain",
    },
  },
  symbol: {
    color: "gray",
    fontSize: "24px",
  },
  gridItem: {
    marginTop: "12px",
    marginBottom: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: "32px",
  },
  box: {
    border: "1px solid #E8EBED",
    boxShadow: "0px 12px 20px -8px rgb(5 43 72 / 12%)",
    borderRadius: "16px",
    padding: "17px",
  },
  link: {
    wordWrap: "break-word",
    overflowWrap: "break-word",
    marginBottom: "14px",
  },
  breakWork: {
    wordWrap: "break-word",
    overflowWrap: "break-word",
    width: "100%",
  },
}));

export default PoolDetail;
