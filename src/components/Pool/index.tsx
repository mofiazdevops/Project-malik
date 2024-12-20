import { LinearProgress, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Progress } from "components/Progress";
import { Ticker } from "components/Ticker";
import React, { Dispatch, useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { formatBigNumber } from "utils/formatNumber";
import { getPercent } from "utils/number";

import PoolService from "services/newpool";
import { ERC20NewService } from "services/erc20New";

// Coin Svg's Import
import Ethereum from "../../assets/svgs/ethereum.svg";
import BNB from "../../assets/svgs/bsc.svg";
import ETH from "../../assets/svgs/ethereum.svg";
import Polygon from "../../assets/svgs/polygon.svg";
import moment from "moment";
import { Skeleton } from "@material-ui/lab";
import { Link } from "react-router-dom";
import useCommonStyles from "styles/common";

import Tick from "../../assets/svgs/tick.svg";

interface IUpcomingProps {
  account?: string;
  className?: string;
  icon?: string;
  name?: string;
  status?: string;
  total?: string;
  maxAlloc?: string;
  minAlloc?: string;
  access?: string;
  coin?: number;
  background?: string;
  symbol?: string;
  id: string;
  contractAddress: string;
  tokenPrice: number;
  claimed: boolean;
  claimedAmount: string;
  totalRaise: number;
  provider: any;
}

const initialState = {
  totalSupply: "...",
  tokenForSale: "...",
  toBeRaised: "...",
  tokenPrice: "...",
  totalOwed: "...",
  percentage: "...",
  valuedDate: "...",
  symbol: "...",
  balanceOF: "...",
  tokensForSale: 0,
  name: "...",
  totalRaise: 0,
};

interface intialStatePROPS {
  totalSupply: string;
  tokenForSale: string;
  toBeRaised: string;
  tokenPrice: string;
  totalOwed: string;
  valuedDate: string;
  percentage: string;
  balanceOF: string;
  tokensForSale: number;
  symbol: string;
  name: string;
  totalRaise: number;
}

export const UpcomingPool = (props: IUpcomingProps) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const [poolStatus, setPoolStatus] = useState<string>("");

  const [data, setData] = useState<intialStatePROPS>(initialState);
  const [loading, setLoading] = useState<boolean>();

  const poolStatusMessage = (status: string, percentage: string): string => {
    // console.log("Stats", status);

    if (percentage === "100" || props.name === "Pieme") {
      return "Sold Out";
    } else if (status === "started") {
      return "In Progress";
    } else if (status === "ended") {
      return "Finished";
    } else {
      return "Coming Soon";
    }
  };

  const SplitTime = (numberOfHours: number) => {
    const Days = Math.floor(numberOfHours / 24);
    const Remainder = numberOfHours % 24;
    const Hours = Math.floor(Remainder);
    const Minutes = Math.floor(60 * (Remainder - Hours));
    return { Days: Days, Hours: Hours, Minutes: Minutes };
  };

  const dateComparision = (startDate: number, endDate: number): string => {
    const cd = new Date();
    const currentTime = moment(cd).utc().unix().valueOf();
    // console.log("Current time", currentTime);
    if (currentTime > startDate) {
      if (currentTime < endDate) {
        const diff = endDate - currentTime;
        const inHours = diff / 3600;
        const dateObj = SplitTime(inHours);
        // console.log("inHours", inHours);
        // console.log("dateObj", dateObj);
        setPoolStatus("started");
        if (dateObj.Days === 0 && dateObj.Hours === 0) {
          return `Pool in process ${dateObj.Hours} hours, ${dateObj.Minutes} minutes remaining`;
        }
        return `Pool in process ${dateObj.Days} days, ${dateObj.Hours} hours remaining`;
      } else {
        // console.log("Pool ended");
        const diff = currentTime - endDate;
        const inHours = diff / 3600;
        const dateObj = SplitTime(inHours);
        // console.log("ended date obj", dateObj);
        // console.log("ended date inHours", inHours);
        setPoolStatus("ended");
        if (dateObj.Days === 0 && dateObj.Hours === 0) {
          return `Finished ${dateObj.Hours} hours, ${dateObj.Minutes} minutes ago`;
        }
        return `Finished ${dateObj.Days} days, ${dateObj.Hours} hours ago`;
      }
    } else {
      // console.log("Pool not started");
      const diff = startDate - currentTime;
      const inHours = diff / 3600;
      const dateObj = SplitTime(inHours);
      setPoolStatus("coming");
      if (dateObj.Days === 0 && dateObj.Hours === 0) {
        return `Registration opens in ${dateObj.Hours} hours, ${dateObj.Minutes} minutes`;
      }
      return `Registration opens in ${dateObj.Days} days, ${dateObj.Hours} hours`;
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

  const getBlockChainData = async (pool: IUpcomingProps) => {
    try {
      setLoading(true);
      const otherProvider = ethers.getDefaultProvider(
        process.env.REACT_APP_BNB_PROVIDER
      );
      const poolServices = new PoolService(
        otherProvider,
        pool.account || "",
        pool.contractAddress
      );
      const ratio = await poolServices.ratio();

      const tokenAddress = await poolServices.tokenAddress();

      const getTokentarget = await poolServices.getTokentarget();

      const tokensForSaleValue =
        Number(weiToEth(getTokentarget)) / Number(weiToEth(ratio));

      const tokensForSale = Math.trunc(tokensForSaleValue);
      // console.log("TokeAddress", tokenAddress);

      const erc20Service = new ERC20NewService(
        props.provider,
        pool.account || "",
        tokenAddress
        // account,
        // props.pool.address
        // "0xba3c0e50e134d4e1aefa26c28e59cf25f2539aef" //working
        //'0xbb48Ac1418BE381c7fa7421D87219fB8BF7469A4'
      );
      // console.log("ERC20", erc20Service);

      // const erc20ServiceBUSD = new ERC20NewService(
      //     otherProvider,
      //     pool.account || "",
      //     "0xe9e7cea3dedca5984780bafc599bd69add087d56"
      //     // tokenAddress
      //     // account,
      //     // props.pool.address
      //     // "0xba3c0e50e134d4e1aefa26c28e59cf25f2539aef" //working
      //     //'0xbb48Ac1418BE381c7fa7421D87219fB8BF7469A4'
      // );

      const getTotalSupply = await erc20Service.getTotalSupply();
      const totalSupply = getTotalSupply.toString();
      // console.log("maxWei", totalSupply.toString());4

      // console.log("Contract address", pool.contractAddress);

      const name = await erc20Service.getName();
      const symbol = await erc20Service.getSymbol();

      const getBalanceOF = await erc20Service.getBalanceOf(
        pool.contractAddress
      );

      let balanceOF = "";

      if (pool?.claimed) {
        balanceOF = pool.claimedAmount.toString();
      } else {
        balanceOF = getBalanceOF.toString();
      }

      // const balanceOF = getBalanceOF.toString();
      // console.log("balanceOF", balanceOF.toString());

      const getToBeRaised = await poolServices.contract.tokenTarget();
      const toBeRaised = getToBeRaised.toString();

      // const getToBeRaised = await poolServices.contract.maxWei();
      // const toBeRaised = getToBeRaised.toString();

      const getTotalOWed = await poolServices.contract.totalOwed();
      const totalOwed = getTotalOWed.toString();
      // console.log("totalOwed", totalOwed);

      const startTime = await poolServices.startTime();
      // console.log("Start Time", startTime.toString());

      const endTime = await poolServices.endTime();
      // console.log("End Time", endTime.toString());

      const claimTime = await poolServices.claimTime();
      // console.log("Claim Time", claimTime.toString());

      // const symbol = await erc20Service.contract.name();

      // console.log("symbol", symbol);

      const valuedDate = await dateComparision(
        startTime.toString(),
        endTime.toString()
      );
      // console.log("ValueDate", valuedDate);

      const percentage = (await (Number(balanceOF) / Number(toBeRaised))) * 100;

      // console.log("Percentage", percentage);
      setData({
        ...data,
        percentage: percentage.toFixed(2),
        totalSupply: weiToEth(totalSupply),
        // tokenForSale: weiToEth(tokenForSale),
        toBeRaised: weiToEth(toBeRaised),
        totalOwed: weiToEth(totalOwed),
        valuedDate: valuedDate,
        // symbol: symbol,
        balanceOF: weiToEth(balanceOF),
        tokensForSale: tokensForSale,
        symbol: symbol,
        name: name,
      });
    } catch (error) {
      setLoading(false);
      console.log(error, "=======error=======");
    }
  };

  useEffect(() => {
    // setInProgress(true);
    if (props.provider)
      getBlockChainData(props)
        .then(() => setLoading(false))
        .catch((err) => {
          setLoading(false);
          console.error(err);
          // console.log("err", err);
          // setPoolError(err.response.data.message);
          // setInProgress(false);
        })
        .finally(() => {
          setLoading(false);
        });
    return () => {
      setData({
        tokenForSale: "...",
        totalSupply: "...",
        tokensForSale: 0,
        toBeRaised: "...",
        tokenPrice: "...",
        totalOwed: "...",
        percentage: "...",
        valuedDate: "...",
        symbol: "...",
        balanceOF: "...",
        name: "...",
        totalRaise: 0,
      });
    };
  }, [props.contractAddress, props.provider]);

  const coinType = (id: number | undefined) => {
    if (id === 56) {
      return BNB;
    } else if (id === 80001 || id === 137) {
      return Polygon;
    } else {
      return ETH;
    }
  };

  const overWriteSymbol = (_name: string, _symbol: string): string => {
    let symbol = _symbol;
    if (_name === "Sheesha") {
      symbol = "asheesha";
    }
    return symbol;
  };

  const overWriteTotalSupply = (_name: string, _supply: string): string => {
    let supply = _supply;
    if (_name === "Sheesha") {
      supply = "1000000000";
    }
    return supply;
  };

  const overWriteTokenForSale = (
    _name: string,
    _tokenForSale: number
  ): number => {
    let tokenForSale = _tokenForSale;
    if (_name === "Sheesha") {
      tokenForSale = Number("3333333");
    } else if (_name === "Pieme") {
      tokenForSale = Number("500000");
    } else {
      tokenForSale = _tokenForSale;
    }
    return Number(tokenForSale);
  };

  return (
    <Link
      className={clsx(commonClasses.noDecoration, classes.poolLink)}
      target={loading ? "_self" : "_blank"}
      to={
        !loading
          ? {
              // pathname: `https://ideao-uae.d3af3lu8d9uax3.amplifyapp.com/pools/details/${props.id}`,
              pathname: `${process.env.REACT_APP_IDO_URL_DEV}/pools/details/${props.id}`,
              // pathname: `/pools/${pool._id}`, // for testing
            }
          : {
              pathname: "#",
            }
      }
    >
      <div className={clsx(classes.root, props.className, "pool")}>
        {/* {loading ? (
                    <>
                        <Skeleton
                            className={classes.coverImage}
                            variant="rect"
                        />
                    </>
                ) : ( */}
        <>
          <img
            alt="idea token"
            className={classes.coverImage}
            src={
              props.background ||
              "https://storage.googleapis.com/polkastarter-storage-production/jopvtozo777fq3hneswv1dmqo5if?GoogleAccessId=polkastarter%40numeric-trilogy-306416.iam.gserviceaccount.com&Expires=1640006579&Signature=4uUkZiDaH6XP1rSzR166whUOBNSGMwqkEjpT%2FGNeQsCogQjnNRNRPe6fxDavilIA3qqgJzuv6CHicYX64oiD%2Fsfvv0QOSEcDVr2Gb2TwWuwD9V6whySmaZ%2F7wHwruDE0PMQKdSY1VzPlGNevnTkZpVBQ%2FjlonbolMLT%2FD8ab9GfoMgG4GYbLM66JQondW21rSLa6WMkXzm618NIIA5e5%2F2UazEBjLJnNf0t3%2BMmI8r1PBtG2L%2Fi7C6w9EDGlbfSqjNa1e12kLuMTWwLNHTnQgN63BbMz1nEqxxNKEsM88gkCqcav5SBBzb%2FQC3kjcg7wEts7MmdIFz%2BFVnDHIVHMNg%3D%3D&response-content-disposition=inline%3B+filename%3D%22wonderhero-cover.jpg%22%3B+filename%2A%3DUTF-8%27%27wonderhero-cover.jpg&response-content-type=image%2Fjpeg"
            }
          />
        </>
        {/* )} */}
        <div className={classes.TagContainer}>
          {/* {loading ? (
                        <>
                            <Skeleton
                                className={classes.loadingTags}
                                variant="rect"
                            />
                        </>
                    ) :  */}
          (
          <div
            className={`${classes.Tags} ${
              poolStatus === "started" ? "started" : ""
            }
              ${poolStatus === "ended" ? "ended" : ""}
              ${poolStatus === "coming" ? "coming" : ""}
              ${props.name === "Pieme" ? "sold" : ""}
              `}
          >
            {/* <svg
            fill="none"
            height="12"
            viewBox="0 0 12 12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M10.1511 2.24987L4.54956 7.85143L2.50851 5.81037C2.34063 5.64823 2.11578 5.55851 1.88239 5.56053C1.649 5.56256 1.42575 5.65618 1.26071 5.82121C1.09568 5.98625 1.00206 6.2095 1.00003 6.44289C0.998006 6.67628 1.08773 6.90113 1.24987 7.06901L3.92024 9.73938C4.08717 9.90626 4.31353 10 4.54956 10C4.78559 10 5.01196 9.90626 5.17888 9.73938L11.4098 3.50851C11.5719 3.34063 11.6616 3.11578 11.6596 2.88239C11.6576 2.649 11.564 2.42575 11.3989 2.26071C11.2339 2.09568 11.0106 2.00206 10.7772 2.00003C10.5438 1.99801 10.319 2.08773 10.1511 2.24987Z"
              fill="white"
              ></path>
            </svg> */}
            {props.name === "Pieme" && (
              <img alt="tick" className={classes.tick} src={Tick} />
            )}
            {poolStatusMessage(poolStatus, data.percentage)}
          </div>
          {/* )} */}
        </div>
        <div className={classes.poolContainer}>
          <div className={classes.logoContainer}>
            {/* {loading ? (
                            <Skeleton
                                className={classes.poolImg}
                                variant="circle"
                            />
                        ) : ( */}
            <img
              alt="idea token"
              className={classes.poolImg}
              src={props.icon || "/imgs/landing/IDEA.png"}
            />
            {/* )} */}
          </div>
          <div className={classes.poolTitle}>
            {/* {loading ? (
                            <Skeleton
                                className={classes.poolTitle}
                                height={20}
                                variant="rect"
                                width={"100%"}
                            />
                        ) : ( */}
            <>
              {props.name || "Token Project"}
              <span>
                <img
                  alt="coin"
                  className={classes.coinImage}
                  src={coinType(props.coin)}
                />
                {/* {props.coin === "0x1" && (
              <img
              alt="coin"
              className={classes.coinImage}
              src={"/imgs/landing/IDEA.png"}
              />
            )} */}
              </span>
            </>
            {/* )} */}
          </div>
          {/* {!loading && <span className={classes.symbol}>${data.symbol}</span>} */}
          {!loading && (
            <span className={classes.symbol}>
              {overWriteSymbol(props.name || "", data.symbol)}
            </span>
          )}
          {/* <span className={clsx(classes.poolBadge, "poolBadge")}>
          {props.status || "Upcoming"}
        </span> */}
          <div className={classes.poolBody}>
            {/* {loading ? (
                            <>
                                <Skeleton
                                    className={classes.poolTitle}
                                    height={10}
                                    variant="rect"
                                    width={"60%"}
                                />
                                <Skeleton
                                    className={classes.poolTitle}
                                    height={10}
                                    variant="rect"
                                    width={"80%"}
                                />
                                <Skeleton
                                    className={classes.poolTitle}
                                    height={10}
                                    variant="rect"
                                    width={"100%"}
                                />
                                <Skeleton
                                    className={classes.poolTitle}
                                    height={10}
                                    variant="rect"
                                    width={"90%"}
                                />
                                <Skeleton
                                    className={classes.poolTitle}
                                    height={10}
                                    variant="rect"
                                    width={"80%"}
                                />
                            </>
                        ) : ( */}
            <>
              <div className={classes.cardbodyitem}>
                <span>Total Supply</span>
                <span>
                  {loading
                    ? "...loading"
                    : overWriteTotalSupply(props.name || "", data.totalSupply)}
                </span>
              </div>
              <div className={classes.cardbodyitem}>
                <span>Token for sale</span>
                <span>
                  {loading
                    ? "...loading"
                    : `${overWriteSymbol(props.name || "", data.symbol)} 
                                          ${overWriteTokenForSale(
                                            props.name || "",
                                            data.tokensForSale
                                          )}
                        `}
                </span>
              </div>
              <div className={classes.cardbodyitem}>
                <span>To be raised</span>
                <span>
                  {loading
                    ? "...loading"
                    : props.name === "Pieme"
                    ? "BUSD 75000"
                    : "BUSD " + data.toBeRaised}
                </span>
              </div>
              <div className={classes.cardbodyitem}>
                <span>Token price</span>
                <span>
                  {loading ? "...loading" : "BUSD" + " " + props.tokenPrice}
                </span>
              </div>
              <div className={classes.progressBarTop}>
                <span className={classes.daysCount}>{data.valuedDate}</span>
                <span className={classes.percentage}>
                  {loading
                    ? "...loading"
                    : props.name === "Pieme"
                    ? "100.00"
                    : data.percentage}{" "}
                  %
                </span>
              </div>
              <LinearProgress
                className={classes.progressBar}
                value={Number(props.name === "Pieme" ? 100 : data.percentage)}
                variant="determinate"
              />
              <div className={classes.progressBarBottom}>
                <span>
                  {props.name === "Pieme" ? "75000" : data.balanceOF} /{" "}
                  {props.name === "Pieme" ? "75000" : data.toBeRaised} BUSD
                </span>
              </div>
            </>
            {/* )} */}
            {/* <div className={classes.body1}>
            <Ticker
            caption="total raise"
            color="error"
            symbol={""}
            value={props.total || "TBA"}
            />
            <Ticker
            caption="min allocation"
            color="info"
            symbol=""
            value={props.minAlloc || "TBA"}
            />
            </div>
            <div className={classes.body2}>
            <Ticker
              caption="max allocation"
              color="success"
              symbol={""}
              value={props.maxAlloc || "TBA"}
              />
            <Ticker
            caption="access"
            color="warning"
            symbol=""
            value={props.access === "private" ? "Private" : "Public"}
            />
          </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

interface IFeaturedProps {
  className?: string;

  icon?: string;
  name?: string;
  status?: string;
  maxAlloc?: string;
  access?: string;
  symbol?: string;
  ratio?: string;
  participants?: string;
  total?: BigNumber;
  current?: BigNumber;
}

export const FeaturedPool = (props: IFeaturedProps) => {
  const classes = useStyles();

  let progress = 0;
  if (props.total !== undefined && props.current !== undefined) {
    progress = getPercent(
      BigNumber.from(props.current),
      BigNumber.from(props.total)
    );
  }

  return (
    <div className={clsx(classes.root, props.className, "pool")}>
      <img
        alt="idea token"
        className={classes.poolImg}
        src={props.icon || "/imgs/landing/IDEA.png"}
      />
      <div className={classes.poolTitle}>{props.name || "Token Project"}</div>
      <span className={clsx(classes.poolBadge, "poolBadge")}>
        {props.status || "Upcoming"}
      </span>
      <div className={classes.poolProgress}>
        <Progress
          current={formatBigNumber(props.current)}
          total={formatBigNumber(props.total)}
          value={progress}
        />
      </div>
      <div className={classes.poolBody}>
        <div className={classes.body1}>
          <Ticker
            caption="RATIO PER ETH"
            color="error"
            symbol={props.symbol || "TKN"}
            value={props.ratio || "00"}
          />
          <Ticker
            caption="participants"
            color="info"
            symbol=""
            value={props.participants || "00"}
          />
        </div>
        <div className={classes.body2}>
          <Ticker
            caption="MAXIMUM"
            color="success"
            symbol={props.symbol || "ETH"}
            value={props.maxAlloc || "0.195"}
          />
          <Ticker
            caption="ACCESS"
            color="warning"
            symbol=""
            value={props.access === "private" ? "Private" : "Public"}
          />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    // width: theme.custom.poolCardWidth,

    // padding: "24px 17px",

    margin: "12px",

    border: "1px solid #E8EBED",

    boxShadow: "0px 12px 20px -8px rgba(5, 43, 72, 0.12)",
    borderRadius: "16px",

    backgroundColor: "white",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    "&:hover": {
      border: "1px solid #59B5FF",
      boxShadow: "0px 16px 24px -12px rgba(89, 181, 255, 0.24)",
    },
  },
  poolImg: {
    height: "5rem",
    width: "5rem",
    borderRadius: "0.5rem",
  },
  poolTitle: {
    marginTop: "4px",
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "bold",
    color: "#1C2535",
    display: "flex",
    justifyContent: "space-between",
  },
  poolBadge: {
    position: "relative",

    background: "#D5EDFF",
    borderRadius: "26px",

    fontSize: "12px",

    padding: "2px 6px 2px 12px",

    "&::before": {
      content: "''",
      width: "4px",
      height: "4px",
      borderRadius: "2px",
      background: "#59B5FF",

      position: "absolute",
      left: "5px",
      top: "8px",
    },
  },
  poolProgress: {
    marginTop: "16px",
    width: "100%",
  },
  poolBody: {
    marginTop: "16px",
    width: "100%",
  },
  cardbodyitem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },
  body1: {
    display: "flex",
  },
  body2: {
    display: "flex",
  },
  poolContainer: {
    padding: "0 17px 24px 17px",
    width: "100%",
    textAlign: "left",
    marginTop: "-35px",
  },
  coverImage: {
    width: "100%",
    objectFit: "cover",
    height: "250px",
  },
  logoContainer: {
    backgroundColor: "#fff",
    border: "0.375rem solid #fff",
    borderRadius: "0.75rem",
    width: "max-content",
  },
  TagContainer: {
    position: "absolute",
    padding: "0.5rem",
    top: 0,
    right: 0,
    zIndex: 2,
  },
  loadingTags: {
    width: "120px",
  },
  Tags: {
    gridGap: "0.25rem",
    gap: "0.25rem",
    borderColor: "#f3f3f4",
    backgroundColor: "#f3f3f4",
    color: "#171d26",
    padding: "0.2875rem 0.575rem",
    borderRadius: "0.25rem",
    alignItems: "center",
    border: "0.0625rem solid ",
    display: "inline-flex",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    // padding: "8px 12px",
    "&.sold": {
      background: "#11dc96",
      color: "#fff",
    },
  },
  coinImage: {
    width: "28px",
    height: "28px",
    marginRight: "4px",
  },
  symbol: {
    color: "#8c96a6",
  },
  progressBar: {
    height: "10px",
    backgroundColor: "#c4c4c4",
    borderRadius: "6px",

    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#0C71BC",
      borderRadius: "6px",
    },
  },
  progressBarTop: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    fontWeight: 300,
    marginBottom: "4px",
  },
  daysCount: {
    width: "80%",
    fontSize: "12px",
  },
  percentage: {
    width: "20%",
    fontSize: "12px",
    textAlign: "right",
  },
  progressBarBottom: {
    textAlign: "right",
    fontSize: "15px",
    fontWeight: 300,
    marginTop: "4px",
  },
  poolLink: {
    color: "#1C2535",
  },
  tick: {
    marginRight: "4px",
  },
}));
