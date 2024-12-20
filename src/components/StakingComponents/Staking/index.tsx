import React, { Dispatch, useEffect, useState } from "react";
import { Button, Grid, Paper, makeStyles } from "@material-ui/core";
import { AppActions, AppTypes } from "store/types";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { StakeService } from "../../../services/staking/stake";
import { Web3Provider } from "@ethersproject/providers";
import { useAppContext } from "contexts";
import { useEagerConnect, useInactiveListener } from "hooks/injectedHook";
import Tooltip from '@mui/material/Tooltip';

import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import StakeModal from "../StakeModal";
import UserModal from "../UserModal";
import ClaimModal from "../ClaimModal";
import ErrorModal from "../ErrorModal";
import { ethToWei } from "utils";
import { ERC20Service } from "services/erc20";

const useStyles = makeStyles((theme: any) => {
  return {
    stakingTop: {
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4,
    },
    topNav: {
      width: "99%",
      margin: "auto",
      borderRadius: "5px",
      backgroundColor: "#F6F6F6",
      overflow: "hidden",
      "& button": {
        width: "33%",
        float: "left",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        border: "none",
        fontSize: "17px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#0C71BC",
          color: "#fff",
        },
      },
      [theme.breakpoints.down("sm")]: {
        width: "auto",
        "& button": {
          float: "left",
          "&:last-child": {
            float: "left",
          },
        },
      },
    },
    activeButton: {
      // background: 'linear-gradient(to right bottom, #2e2d88, #232b2b)',
      backgroundColor: "#0C71BC",
      color: "#fff",
    },
    Tooltip:{
      textAlign: 'center',
      margin: 'auto'
    },
    nonActiveButton: {
      backgroundColor: "#F6F6F6",
      color: "#000",
    },
    showContent: {
      marginTop: 10,
      display: "block",
    },
    hiddenContent: {
      display: "none",
    },
    widthIncrease: {
      margin: "auto",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px",
      marginBottom: "20px",
    },
    gridPadding: {
      borderRadius: "14px",
      padding: "20px",
      boxShadow: "0 0 10px gray",
      background: "#fff",
      color: "#000",
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    gridPaddingSecond: {
      borderRadius: "10px",
      padding: "15px",
      background: "#0C71BC",
      color: "#000",
    },
    pStyling: {
      fontSize: "14px",
      color: "#000",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    accountIDClass: {
      background: "#333",
      color: "#fff",
      padding: "8px",
    },
    inputWithButton: {
      position: "relative",
    },
    inputField: {
      width: "100%",
      backgroundColor: "#F6F6F6",
      padding: "12px 12px",
      border: "",
      borderColor: "transparent",
      color: "#000",
      fontWeight: "bolder",
      textDecoration: "none",
      outline: "none",
      marginTop: "10px",
    },
    searchField: {
      width: "90%",
      borderRadius: '12px',
      backgroundColor: "#F6F6F6",
      padding: "12px 12px",
      border: "",
      color: "#000",
      borderColor: "transparent",
      fontWeight: "bolder",
      textDecoration: "none",
      marginTop: "2rem",
      marginBottom: '2rem',
      outline: 'none'
    },
    buttonStyling: {
      width: "100%",
      background: "#0C71BC",
      color: "#fff",
      marginTop: "15px",
      padding: "8px 8px",
      fontSize: "15px",
      "&:hover": {
        backgroundColor: "#084F83",
        color: "#fff",
      },
    },
    disabled:{
      "&$disabled": {
        width: "100%",
        color: "#fff",
        marginTop: "15px",
        padding: "8px 8px",
        fontSize: "15px",
        backgroundColor: '#084F83',
        cursor: 'no-drop'
      }
    },
    lineHei: {
      lineHeight: "1.6",
    },
    pColoring: {
      fontSize: "14px",
      color: "#000",
      lineHeight: "250%",
      cursor: "pointer",
    },
  };
});

export const injected = new InjectedConnector({
  supportedChainIds: [137], // remove to 137
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
        network: "137", // remove to 137
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

export const Staking = () => {
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

  const [toggleState, setToggleState] = useState(1);
  const [inputVal, setInputVal] = useState("");
  const [percentVal, setPercentVal] = useState(15);
  const [addressVal, setAddressVal] = useState(1);
  const [openPopup, setOpenPopup] = useState(false);
  const [openClaimPopup, setOpenClaimPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Start Staking");
  const [hashNumber,setHashnumber]= useState();
  const [hashNumberClaim, setHashNumberClaim]= useState();
  const [userDataInfo, setUserDataInfo]= useState([]);
  const [errorMessage, setErrorMessage]= useState<string>();
  const [errorMsgModal, setErrorMsgModal]= useState(false);
  const [tokenStaked, setTokenStaked]= useState<any>();

  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  const classes: any = useStyles();

  const newStaking= async ()=>{
    if(account) {
        const register = new StakeService(
          provider,
          account,
          process.env.REACT_APP_STAKING_CONTRACT_ADDRESS || "");
          const registerPool : any= await register.register(addressVal, inputVal);
          console.log("register pool", registerPool);
          // 
          const erc20 = new StakeService(
            provider,
            account,
            process.env.REACT_APP_STAKING_CONTRACT_ADDRESS || ""
          );

          const approved= new StakeService(
            provider,
            account,
            process.env.REACT_APP_STAKING_CONTRACT_ADDRESS || "");
            const erc20Service = new ERC20Service(
              provider,
              account,
              process.env.REACT_APP_IDEA_CONTRACT_ADDRESS || ""
            );
            const approvePool: any= await erc20Service.approve(process.env.REACT_APP_STAKING_CONTRACT_ADDRESS || "", ethToWei(inputVal));
            
            console.log('this is approve pool', approvePool);

          const createStakingPool: any = await erc20.applyforstaking(registerPool.poolId);
          console.log("create staking pool", createStakingPool);
          setHashnumber(await createStakingPool.hash);
          console.log('this is hash value',hashNumber);

          const getData= new StakeService(
            provider,
            account,
            process.env.REACT_APP_STAKING_CONTRACT_ADDRESS || "");
            const userData= await getData.getAllUsersInfo();
            console.log('this is userData', userData);
            setUserDataInfo(await getData.getAllUsersInfo());
          setInputVal("");
          setOpenPopup(!openPopup);
      };   
    };

  const handleClaim= async ()=>{
    if(account) {
      const claim = new StakeService(
        provider,
        account,
        process.env.REACT_APP_STAKING_CONTRACT_ADDRESS || "");
        try {
          const claimData:any= await claim.stakingClaim(account);
          
          const awaitedTokenStake= await claimData.TokensStaked;

          // if(awaitedTokenStake== undefined || 'undefined'){
          if(awaitedTokenStake== undefined){
            setErrorMessage('Staking Time Remaining');
            setErrorMsgModal(!errorMsgModal);
          }
          else{
            setHashNumberClaim(await claimData.transactionObject.hash);
            setOpenClaimPopup(!openClaimPopup);
          }
        } catch (error:any) {
          setErrorMessage('Nothing to Claim!');
          setErrorMsgModal(!errorMsgModal);
        }
    }
  };

  const handleVal = (e: any) => {
    setInputVal(e.target.value);
  };
  
  const disableButton = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
      setButtonText("Start Staking");
    }, 30000);
  };

  return (
    <div className={classes.stakingTop}>
      <Grid container spacing={4}>
        <Grid item sm={11} xs={12}>
          <Paper className={classes.gridPadding}>
            <div className={classes.widthIncrease}>Stake with Ideaology</div>
            <div>
              <p>Select prefferable time period for staking?</p>
              <div>
                <div className={classes.topNav}>
                  <button
                    className={
                      toggleState === 1
                        ? classes.activeButton
                        : classes.nonActiveButton
                    }
                    onClick={() => {
                      toggleTab(1);
                      setAddressVal(1);
                      setPercentVal(15);
                    }}
                  >
                     <Tooltip title="Percentage for Staking 1 Months: 15%" placement="top" className={classes.Tooltip}>
                      <p>1 Month</p>
                    </Tooltip>
                  </button>
                  <button
                    className={
                      toggleState === 2
                        ? classes.activeButton
                        : classes.nonActiveButton
                    }
                    onClick={() => {
                      toggleTab(2);
                      setAddressVal(3);
                      setPercentVal(10);
                    }}
                  >
                    <Tooltip title="Percentage for Staking 3 Months: 10%" placement="top" className={classes.Tooltip}>
                      <p>3 Months</p>
                    </Tooltip>
                  </button>
                  <button
                    className={
                      toggleState === 3
                        ? classes.activeButton
                        : classes.nonActiveButton
                    }
                    onClick={() => {
                      toggleTab(3);
                      setAddressVal(12);
                      setPercentVal(5);
                    }}
                  >
                    <Tooltip title="Percentage for Staking 12 Months: 5%" placement="top" className={classes.Tooltip}>
                      <p>12 Months</p>
                    </Tooltip>
                  </button>
                </div>
                <div className={classes.showContent}>
                  <div className={classes.flexContainer}>
                    <div>How much do you want to stake with us?</div>
                  </div>
                  <input
                    placeholder="Enter Staking Amount > 500k"
                    type="number"
                    className={classes.inputField}
                    onChange={handleVal}
                    min={500}
                  />
                  <div>
                    <p>{`You'll get ${percentVal}% for staking for ${addressVal} months`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button 
              className={isDisabled ? classes.disabled : classes.buttonStyling} 
              onClick={()=>{disableButton(); newStaking();}}
              disabled={isDisabled || !inputVal}
              > 
                {isDisabled ? <span>Loading...</span> : <span>{buttonText}</span>}
              </Button>
              <div>
                <Button 
                    className={classes.buttonStyling}
                    onClick={handleClaim}
                    // disabled={timeLeft}
                    >
                    Claim
                </Button>
              </div>
            </div>
            <StakeModal openPopup={openPopup} addressVal={addressVal} setOpenPopup={setOpenPopup} hashNumber={hashNumber}/>
            <ClaimModal openClaimPopup={openClaimPopup} setOpenClaimPopup={setOpenClaimPopup} hashNumberClaim={hashNumberClaim}/>
            <ErrorModal errorMsgModal={errorMsgModal} setErrorMsgModal={setErrorMsgModal} errorMessage={errorMessage}/>
          </Paper>
        </Grid>
      </Grid>

      {/* <input
        placeholder="Search Wallet Address"
        type="text"
        className={classes.searchField}
      /> */}
      
      {userDataInfo?.map((user:any)=>(
          <div key={user.id}>
            <UserModal user={user}/>
          </div>
        ))}
    </div>
  );
};
