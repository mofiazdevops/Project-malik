// import { value Container, value makeStyles } from "@material-ui/core";
// import clsx from "clsx";
// import { value UpcomingPool } from "components";
// import React from "react";
// import { value IPool } from "store/types";
// import { value calculateTimeLeft } from "utils/datetime";
// import { value formatBigNumber } from "utils/formatNumber";
// import useCommonStyles from "styles/common";

import React, { Dispatch, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { IDO_URL } from "config/constants";
import useCommonStyles from "styles/common";
import { calculateTimeLeft } from "utils/datetime";
import { formatBigNumber } from "utils/formatNumber";
// import { IPool } from "store/types";
import { UpcomingPool } from "components";
import clsx from "clsx";
import { Container, Grid } from "@material-ui/core";
import logo from "../../../../assets/pngs/projectscac/projectlogo.png";
import background from "../../../../assets/pngs/projectscac/projectbackground.png";
import { Link } from "react-router-dom";
import { getPools } from "services/api";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect, useInactiveListener } from "hooks/injectedHook";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { useAppContext } from "contexts";
import { AppActions, AppTypes } from "store/types";
import { ethers } from "ethers";
const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundImage: "url(/imgs/landing/ellipse.svg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "800px 200px",

    [theme.breakpoints.down("xs")]: {
      backgroundPosition: "100px 200px",
    },
  },
  container: {
    display: "flex",

    marginTop: "160px",
    paddingBottom: "160px",

    position: "relative",
  },
  pinText: {
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "40px",
    color: "#1C2535",
    position: "relative",
    // position: "absolute",
    // left: "100px",
    // top: "20px",

    [theme.breakpoints.down("xs")]: {
      left: `calc((100vw - ${theme.custom.poolCardWidth})/ 2 - 6px)`,
      top: "-60px",
    },

    "&::before": {
      content: "url(/imgs/landing/pin-left-small.svg)",
      position: "absolute",
      left: "-20px",
      top: "-20px",
      zIndex: -1,
    },
  },
  poolWrapper: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "start",
    justifyContent: "flex-start",

    // width: "600px",

    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  down: {
    position: "relative",
    top: "100px",

    [theme.breakpoints.down("xs")]: {
      top: 0,
    },
  },
  pinCircleImg: {
    display: "block",

    position: "absolute",
    right: "calc((min(100vw, 1280px) - 600px) / 2)",
    top: "50px",
    zIndex: -1,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  pinGridImg: {
    display: "block",

    position: "absolute",
    left: "calc((min(100vw, 1280px) - 600px) / 2)",
    bottom: "100px",
    zIndex: -1,
    [theme.breakpoints.down("xs")]: {
      left: "calc((100vw - 300px) / 2)",
    },
  },
  noPools: {
    width: "300px",
    height: "200px",

    marginLeft: "auto",
    marginRight: "auto",

    textAlign: "center",

    fontSize: "24px",
    lineHeight: "32px",
    color: "#1C2535",

    display: "flex",
    flexDirection: "column-reverse",
  },
  poolLink: {
    color: "#1C2535",
  },
}));

interface IProps {
  className?: string;
}

export interface IPool {
  account?: string;
  category: string;
  chain: string;
  chainId?: number;
  fundType: number;
  address: string;
  access: number;
  tradeValue: number;
  minAlloc: number;
  maxAlloc: number;
  fee: number;
  startDate?: string;
  endDate?: string;
  claimDate?: string;
  applicationId: any;
  _id: string;
  status?: string;
  user?: string;
  meta?: {
    logo?: string;
    cover?: string;
  };
  poolId?: number;
  deployStatus: boolean;
  contractAddress: string;
  tokenPrice: number;
  claimed: boolean;
  claimedAmount: string;
  totalRaise: number;
}
export const injected = new InjectedConnector({
  supportedChainIds: [56],
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
        network: "56",
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

export const PoolCard = (props: IProps) => {
  // const context = useWeb3React<Web3Provider>();
  // const {
  //   account,
  //   activate,
  //   active,
  //   chainId,
  //   connector,
  //   deactivate,
  //   error,
  //   library: provider,
  // } = context;
  const { dispatch, state } = useAppContext();

  // error && getErrorMessage(error, dispatch);

  // handle logic to recognize the connector currently being activated
  // const [activatingConnector, setActivatingConnector] = React.useState<any>();
  // React.useEffect(() => {
  //   if (activatingConnector && activatingConnector === connector) {
  //     setActivatingConnector(undefined);
  //   }
  // }, [activatingConnector, connector, chainId]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  // const triedEager = useEagerConnect();

  // // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  // useInactiveListener(!triedEager || !!activatingConnector);

  // // useEffect
  // const currentConnector = injected;
  // const activating = currentConnector === activatingConnector;
  // const connected = currentConnector === connector;
  // const disabled =
  //     !triedEager || !!activatingConnector || connected || !!error;
  // // console.log("Connected", disabled);

  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const [pools, setPool] = useState<any>();

  useEffect(() => {
    setLoading(true);
    getPools()
      .then((response) => {
        setPool(response.data);

        // console.log("Pools", pools);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // console.log("Error", err);
      });
  }, []);

  // useEffect(() => {
  //     if (!account || !provider) {
  //         const currentConnector = injected;
  //         setActivatingConnector(currentConnector);
  //         activate(injected);
  //     }
  // }, [account, provider, activate]);

  useEffect(() => {
    const __window: any = window;

    if (__window.ethereum) {
      __window.ethereum.on("chainChanged", () => {
        __window.location.reload();
      });
      __window.ethereum.on("accountsChanged", () => {
        __window.location.reload();
      });
    }
  });

  return (
    <div className={clsx(classes.root, props.className)}>
      <Container className={classes.container} maxWidth="lg">
        <img
          alt="pin-circle"
          className={classes.pinCircleImg}
          src="/imgs/landing/pin-circle.svg"
        />
        <img
          alt="pin-grid"
          className={classes.pinGridImg}
          src="/imgs/landing/pin-grid.svg"
        />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className={clsx(classes.pinText, "pinText")}>
              {/* {props.name} <br /> Pools */}
              All Pools
            </div>
          </Grid>
          <Grid container justifyContent="center">
            {pools && pools.length > 0 ? (
              pools
                .filter((deployed: any) => deployed.deployStatus === true)
                .sort()
                .reverse()
                .map((pool: IPool, key: number) => {
                  return (
                    <Grid item key={key} lg={4} md={6} xs={12}>
                      <UpcomingPool
                        access={"Public"}
                        account={pool.account}
                        background={pool.meta?.cover}
                        claimed={pool.claimed}
                        claimedAmount={pool.claimedAmount}
                        coin={pool.chainId}
                        contractAddress={pool.contractAddress}
                        icon={pool.meta?.logo}
                        id={pool._id}
                        // className={idx % 2 === 1 ? classes.down : ""}
                        // background={background}
                        name={pool.applicationId?.projectName || "N/A"}
                        // symbol="$CAC"
                        provider={
                          new ethers.providers.Web3Provider(
                            (window as any).ethereum
                          )
                        }
                        tokenPrice={pool.tokenPrice}
                        totalRaise={pool.totalRaise}

                        // maxAlloc={formatBigNumber(pool.maxWei)}
                        // minAlloc={formatBigNumber(pool.minWei)}
                        // status={`In ${calculateTimeLeft(pool.startTime).days} days`}
                        // total={formatBigNumber(pool.tokenTarget)}
                      />
                    </Grid>
                  );
                })
            ) : (
              <h3>No pools found</h3>
            )}
            {/* {props.loading ? (
              <div className={classes.noPools}>Loading pools ...</div>
            ) : props.pools.length === 0 ? (
              <div className={classes.noPools}>No pools</div>
            ) : (
              <>
                {props.pools.map((pool: IPool, idx: number) => (
                  <>
                    <Grid item key={pool.id} lg={4} md={6} xs={12}>
                      <a
                        className={clsx(
                          commonClasses.noDecoration,
                          classes.poolLink
                        )}
                        href={`${IDO_URL}/pools/${pool.id}`}
                        key={pool.id}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <UpcomingPool
                          access={pool.poolType == 0 ? "private" : "public"}
                          className={idx % 2 === 1 ? classes.down : ""}
                          coin={pool.id}
                          icon={pool.metaData?.icon}
                          maxAlloc={formatBigNumber(pool.maxWei)}
                          minAlloc={formatBigNumber(pool.minWei)}
                          name={pool.metaData?.projectName}
                          status={`In ${
                            calculateTimeLeft(pool.startTime).days
                          } days`}
                          total={formatBigNumber(pool.tokenTarget)}
                        />
                      </a>
                    </Grid>
                    <Grid item key={pool.id} lg={4} md={6} xs={12}>
                      <a
                        className={clsx(
                          commonClasses.noDecoration,
                          classes.poolLink
                        )}
                        href={`${IDO_URL}/pools/${pool.id}`}
                        key={pool.id}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <UpcomingPool
                          access={pool.poolType == 0 ? "private" : "public"}
                          className={idx % 2 === 1 ? classes.down : ""}
                          coin={pool.id}
                          icon={pool.metaData?.icon}
                          maxAlloc={formatBigNumber(pool.maxWei)}
                          minAlloc={formatBigNumber(pool.minWei)}
                          name={pool.metaData?.projectName}
                          status={`In ${
                            calculateTimeLeft(pool.startTime).days
                          } days`}
                          total={formatBigNumber(pool.tokenTarget)}
                        />
                      </a>
                    </Grid>
                  </>
                ))}
              </>
            )} */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
