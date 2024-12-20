import React, { useEffect, useState } from "react";
import "./index.css";

// mui
import { Avatar, IconButton, Typography } from "@mui/material";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

// utility functions
import { calculateTimeDifference } from "utils/common-methods";

// components
import { MyTimer } from "components/countdown/countdown";
import Confetti from "react-confetti";
import moment from "moment";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AccountInfo, ConnectWalletButtonItem } from "components";
import { ConnectorNames } from "utils/enums";
import connectors from "utils/connectors";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";
import { STORAGE_KEY_CONNECTOR } from "config/constants";
import { useConnectedWeb3Context } from "contexts";
import styled from "@emotion/styled";
import VoteHistory from "./VoteHistory";

declare global {
  interface Window {
    height: any;
    width: any;
  }
}
interface TabProps {
  active: boolean;
}

const Tab = styled.div`
  width: 22rem;
  display: flex;
  border: 1px solid #0c71bc;
  border-radius: 2rem;
  margin: 0 auto;
`;

const Tab1 = styled.div<TabProps>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  background: ${(props: any) => (props?.active ? "#0C71BC" : "transparent")};
  color: ${(props: any) => (props?.active ? "#fff" : "#000")};
  font-weight: ${(props: any) => (props?.active ? "600" : "500")};
  border-radius: 2rem;
  cursor: pointer;
`;

const Tab2 = styled.div<TabProps>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  background: ${(props: any) => (props?.active ? "#0C71BC" : "transparent")};
  color: ${(props: any) => (props?.active ? "#fff" : "#000")};
  font-weight: ${(props: any) => (props?.active ? "600" : "500")};
  border-radius: 2rem;
  cursor: pointer;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "382px",
  outline: "none",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  background: "#fff",
  color: "#000",
  borderRadius: "15px",
  padding: "40px",
  textAlign: "center",
};

function VoteView({ data, methods }: any) {
  const {
    projects,
    time,
    winnerId,
    winnerVoters,
    minimum_voting_balance,
    airdropAmount,
  } = data;
  const { handleVote } = methods;
  const height = window.height;
  const width = window.width;
  const [open, setOpen] = React.useState(false);
  const [winnerItem, setWinnerItem] = useState<any>(undefined);
  const [activeTab, setActiveTab] = useState<any>(true);

  const handleOpen = (winnerItem: any) => {
    if (winnerItem !== undefined) {
      setOpen(true);
      setWinnerItem(winnerItem);
    }
  };
  const handleClose = () => setOpen(false);

  const [state, setstate] = useState<any>({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  const [winner, setWinner] = useState<any>(undefined);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const data = calculateTimeDifference(time);
      setstate(data);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  React.useEffect(() => {
    if (
      winnerId !== 0 &&
      winnerId !== "0x0000000000000000000000000000000000000000" &&
      state.seconds === 0 &&
      state.hours === 0 &&
      state.days === 0 &&
      state.minutes === 0
    ) {
      setWinner(winnerId);
    } else {
      setWinner(undefined);
    }
  }, [state, winnerId]);

  const context = useWeb3React();
  const { account, rawWeb3Context } = useConnectedWeb3Context();

  const onClickWallet = (wallet: ConnectorNames) => {
    const currentConnector = connectors[wallet];
    if (wallet) {
      if (
        currentConnector instanceof WalletConnectConnector &&
        currentConnector.walletConnectProvider?.wc?.uri
      ) {
        currentConnector.walletConnectProvider = undefined;
      }
      context.activate(currentConnector);
      localStorage.setItem(STORAGE_KEY_CONNECTOR, wallet);
    }
  };

  const onDisconnect = () => {
    rawWeb3Context.deactivate();
    localStorage.removeItem(STORAGE_KEY_CONNECTOR);
  };

  return (
    <section style={{ marginTop: "5rem" }}>
      <div className="votePage">
        <Tab>
          <Tab1 active={activeTab === true} onClick={() => setActiveTab(true)}>
            Vote
          </Tab1>
          <Tab2
            active={activeTab === false}
            onClick={() => setActiveTab(false)}
          >
            Poll History
          </Tab2>
        </Tab>
        {activeTab === false ? (
          <VoteHistory />
        ) : (
          <>
            <div style={{ width: "14rem", margin: "2rem auto 2rem" }}>
              {!account ? (
                <ConnectWalletButtonItem
                  // style={{ background: "#000", color: "white" }}
                  disabled={false}
                  icon={ConnectorNames.Injected}
                  onClick={() => {
                    onClickWallet(ConnectorNames.Injected);
                  }}
                  text="Connect Metamask"
                />
              ) : null}
              {account ? (
                <AccountInfo
                  address={account}
                  icon={ConnectorNames.Injected || ""}
                  onDisconnect={onDisconnect}
                />
              ) : null}
            </div>

            <div className="timerContainer">
              <MyTimer expiryTimestamp={state} />
              {/* <Typography variant="h6">{`${monthsFull[time.getMonth()]}  ${time.getDate()}, ${time.getFullYear()}`}</Typography> */}
              <Typography variant="h6">
                {moment(new Date()).format("MMMM DD, YYYY")}
              </Typography>
            </div>
            {winner ? <Confetti height={height} width={width} /> : null}

            <div className="airdropAmount">
              <Typography>Airdrop Amount Upto:</Typography>
              {/* <Typography>{weiToEthers(airdropAmount)}</Typography> */}
              <Typography>{airdropAmount} IDEA</Typography>
            </div>
            <div className="airdropAmount" style={{ marginBottom: "1rem" }}>
              <Typography>Minimum Amount:</Typography>
              <Typography>{minimum_voting_balance} IDEA</Typography>
            </div>
            {/* <div className="votepage__region">
              <Typography>Project:</Typography>
              <img
                alt="flag"
                className="region__flag"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/2560px-Flag_of_the_United_Arab_Emirates.svg.png"
              />
            </div> */}

            <Modal
              aria-describedby="modal-modal-description"
              aria-labelledby="modal-modal-title"
              onClose={handleClose}
              open={open}
            >
              <Box sx={style}>
                <Typography
                  component="h2"
                  id="modal-modal-title"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  variant="h6"
                >
                  Congratulations
                </Typography>
                <p style={{ marginTop: "1rem", fontSize: "21px" }}>
                  You&apos;ve successful won the voting competition for the
                  project <b>{winnerItem?.name}</b>
                </p>
                <h3>Voters</h3>
                <ul>
                  {winnerVoters &&
                    winnerVoters.map((val: any, key: number) => {
                      return <li key={key}>{val}</li>;
                    })}
                </ul>

                <div style={{ marginTop: "1rem" }}>
                  <Button
                    onClick={handleClose}
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </Button>
                </div>
              </Box>
            </Modal>

            <div className="timerContainer" style={{ marginTop: "4rem" }}>
              <Typography variant="h6">
                ideaology next project should be
              </Typography>
            </div>
            <div className="vote__cardContainer">
              {/* {[{ name: 'Artificial Intelligence', description: "AI based blockchain ecosystem", img: "https://www.aljazeera.com/wp-content/uploads/2022/09/GettyImages-1345658982.jpg?resize=1920%2C1440" },
                    { name: 'Metaverse', description: "Mall in metaverse", img: 'https://www.searchenginejournal.com/wp-content/uploads/2023/04/the-metaverse-what-is-it-2-64412b87eaf6c-sej.png' },
                    { name: 'Fintech', description: "Fintech Dao", img: "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1676549559/1676549557.jpg" },
                    ].map((item, i) => ( */}
              {projects?.length > 0 ? (
                projects.map((item: any, i: number) => (
                  <div
                    className="voteCard"
                    key={i}
                    style={{
                      cursor: "pointer",
                      background:
                        winner === undefined
                          ? "transparent"
                          : winner === item?.cadidate_address
                          ? "#2d6e6b"
                          : "#555456",
                    }}
                  >
                    <div
                      className="voteCard__avatarTxt"
                      onClick={() =>
                        handleOpen(winner !== undefined ? item : undefined)
                      }
                    >
                      <Avatar src={item.uri} variant="rounded" />
                      <div className="voteCard__txt">
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textTransform: "capitalize",
                          }}
                        >
                          {item?.name || "N/A"}
                        </Typography>
                        <Typography variant="body2">
                          {item?.description || "N/A"}
                        </Typography>
                      </div>
                    </div>
                    <div className="voteCard__btn">
                      {state.seconds === 0 &&
                      state.hours === 0 &&
                      state.days === 0 &&
                      state.minutes === 0 ? null : (
                        <IconButton
                          onClick={() => handleVote(i.toString())}
                          sx={{ color: "#000" }}
                        >
                          <HowToVoteIcon />
                        </IconButton>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="voteCard"
                  style={{ height: "3rem", justifyContent: "center" }}
                >
                  <div className="voteCard__avatarTxt">
                    <div className="voteCard__txt">
                      <Typography>{"No Pool Reigstered Yet!"}</Typography>
                    </div>
                  </div>
                  <div className="voteCard__btn"></div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default VoteView;
