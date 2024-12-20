import React, { Dispatch, useEffect, useState } from "react";
import VoteView from "./VoteView";
import moment from "moment";
import { VotingService } from "services/VOTING_SERVICE";

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
import { weiToEthers } from "utils/common-methods";
import { getPosClient } from "utils/posClient";
import { weiToEth } from "utils";

export const injected = new InjectedConnector({
  supportedChainIds: [137],
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
        network: "137",
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

function Vote() {
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

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();
  // const contractForVoting = new ethers.Contract("0x9Ba52262B258A147e6e6256cF520f15E860D686E", VOTEabi.abi, signer);

  // state
  const [endTime, setEndTime] = useState<any>(new Date());
  const [winnerId, setWinnerId] = useState<any>(0);
  const [airdropAmount, setAirdropAmount] = useState<any>(null);
  const [projects, setProjects] = useState<any>([]);
  const [winnerVoters, setWinnerVoters] = useState<any>([]);
  const [IDEABalance, setIDEABalance] = useState<number>(0);

  const [minimum_voting_balance, set_minimum_voting_balance] =
    useState<number>(0);

  const getIDEABalance = async (account: any) => {
    const root_POL_IDEA_Token = process.env.REACT_APP_POLYGON_IDEA_Token;
    const postClient: any = await getPosClient(
      account,
      false,
      root_POL_IDEA_Token,
      true
    );
    const balance = await postClient.getBalance(account);
    const ethersValue = weiToEth(balance);
    setIDEABalance(Number(parseFloat(ethersValue || "0")?.toFixed(3)));
  };

  const handleVote = async (id: any) => {
    if (!account || !provider) {
      return;
    }

    const votingService = new VotingService(
      provider,
      process.env.REACT_APP_VOTING_CONTRACT || "",
      account
    );

    // if (minimum_voting_balance > IDEABalance) {
    //   dispatch({
    //     type: AppTypes.AlertModal,
    //     payload: {
    //       show: true,
    //       title: "Low IDEA Balance",
    //       body: `You don't have enough IDEA tokens to vote`,
    //     },
    //   });
    // } else {
    await votingService
      .vote(id)
      .then(async (res: any) => {
        alert("Vote Casted");
        // provider.getTransactionReceipt(res.hash).then((res) => {
        //   if (res && res.status === 1) {
        //     alert("Vote Casted.");
        //   } else if (res && res.status === 0) {
        //     alert("Please check you have IDEA Tokens to vote");
        //   }
        // });
      })
      .catch((err: any) => {
        alert("Please check you have IDEA Tokens to vote");

        console.log(err, "================error in voting");
      });
    // }
  };

  const getResult = async () => {
    try {
      // if (!account || !provider) {
      //   return;
      // }

      const votingService = new VotingService(
        provider,
        process.env.REACT_APP_VOTING_CONTRACT || "",
        account
      );

      const items = await votingService.winnerid().then(async (res: any) => {
        setWinnerId(res.toNumber());
        try {
          const winnerVoters = await votingService.getVoters();
          setWinnerVoters([...winnerVoters]);
        } catch (error) {
          console.log(error, "===============me===========error==============");
        }
      });
    } catch (error) {
      console.log(error, "====getResulter error====");
    }
  };

  const fetchProjects = async () => {
    try {
      // if (!account || !provider) {
      //   return;
      // }
      const votingService = new VotingService(
        provider,
        process.env.REACT_APP_VOTING_CONTRACT || "",
        account
      );

      await votingService.getAllCandidates().then((res: any) => {
        const result: any = [];
        console.log(res, "====d====");
        res.map((val: any) => {
          if (val && val[1] !== "" && val[1] !== undefined)
            result.push({
              id: val[0].toNumber() || 0,
              name: val[1],
              category: val[2],
              cadidate_address: val[3],
              uri: val[4],
              description: val[5],
              totalVotes: val[6].toNumber() || 0,
            });
        });
        setProjects([...result]);
      });
    } catch (error) {
      console.log(error, "====er====");
    }
  };

  const fetchData = async () => {
    // fetchEndTime
    // if (!account || !provider) {
    //   return;
    // }
    const votingService = new VotingService(
      provider,
      process.env.REACT_APP_VOTING_CONTRACT || "",
      account
    );

    await votingService
      .getEndTime()
      .then((res: any) => {
        const date = moment.unix(res.toNumber()).format("YYYY-MM-DD HH:mm:ss");
        setEndTime(date);
      })
      .catch((err: any) => {
        console.log(err, "=====s======s=====s ");
      });

    await votingService
      .minimum_voting_balance()
      .then((res: any) => {
        const __minimum_voting_balance = weiToEthers(res);
        set_minimum_voting_balance(__minimum_voting_balance || 0);
      })
      .catch((err: any) => {
        console.log(err, "=====s======s=====s ");
      });

    // fetchAirDropAmount
    await votingService
      .airdrop()
      .then((res) => {
        const airdropamount = weiToEthers(res);
        setAirdropAmount(airdropamount || 0);
      })
      .catch((err) => {
        console.log(err);
      });

    // // fetchProjectCount
    // await contractForVoting
    //     .candidateList()
    //     .then((res) => {
    //         setProjectsCount(res.toString());
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
  };

  useEffect(() => {
    fetchProjects();
    fetchData();
    getResult();

    if (!account || !provider) {
      return;
    } else {
      getIDEABalance(account);
    }
  }, [provider, account]);

  // useEffect(() => {
  //     if (contractForVoting) {
  //         fetchData();
  //     }
  // }, [contractForVoting]);

  const d1 = new Date(),
    d2 = new Date(d1);
  d2.setMinutes(d1.getMinutes() + 1);

  return (
    <VoteView
      data={{
        time: new Date(endTime),
        airdropAmount,
        projects,
        winnerId,
        winnerVoters,
        minimum_voting_balance,
      }}
      methods={{ handleVote }}
    />
  );
}

export default Vote;
