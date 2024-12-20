import React from "react";
import "../index.css";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { Banner } from "layouts";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const useStyles = makeStyles(() => ({
  root: {},
  container: {
    position: "relative",
  },
}));

interface IProps {
  className?: string;
  name: any;
  content: any;
}

export default function Votingplateform(props: IProps) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <meta
            name="description"
            content="To start playing play-to-earn games it is necessary to identify which type of game you want to play. The simple evolution of gaming is play-to-earn and you should enjoy the assumption about what you’re doing , Join Manialands & Earn in crypto if you are Game lover"
          />
        </Helmet>
      </div>
      <div className={clsx(classes.root, props.className)}>
        <Container className={classes.container} maxWidth="lg">
          <div className="mt-5 pt-5">
            <h1 className="blogs_content_h1">Ideaology 3.0 Initiative Poll</h1>
            <p className="blogs_content_p">
              Ideaology is excited to announce the launch of its 3.0 network and
              is seeking your valuable input to shape this decision. Your
              participation is crucial, and as a token of appreciation,
              Ideaology is offering a reward of 1,000,000 Idea Coins to
              participants.{" "}
            </p>
            <h3 className="blogs_content_h3">
              How do I join the Ideaology 3.0 Initiative Poll with 100 Idea
              Coins?
            </h3>
            <p className="blogs_content_p">
              To participate in the Ideaology 3.0 Initiative Poll, follow these
              steps for the Minimum Balance to Participate:
            </p>
            <p className="blogs_content_p">
              1. Ensure that you have a minimum balance of 100 Idea Coins in
              your metamask.
            </p>
            <p className="blogs_content_p">
              2. If you do not have the required balance, you can acquire Idea
              Coins through participating exchanges.
            </p>
            <p className="blogs_content_p">
              3. Once you have the minimum balance, you are eligible to cast
              your vote in the initiative poll.
            </p>
            <p className="blogs_content_p">Starting Date: [To be announced]</p>
            <p className="blogs_content_p">Ending Date: [To be announced]</p>
            <h3 className="blogs_content_h3">
              To cast your vote, please select one of the following options:
            </h3>
            <p className="blogs_content_p">- Yes</p>
            <p className="blogs_content_p">- No</p>
            <p className="blogs_content_p">I do not know</p>
            <p className="blogs_content_p">
              Participants are encouraged to cast their votes by selecting one
              of the following options: Yes, No, or I do not know. Your vote
              will play a significant role in advancing the Ideaology 3.0
              initiative.
            </p>
            <p className="blogs_content_p">
              The voting process on the IDEAOLOGY platform is transparent and
              user-friendly. Project organizers initiate the voting process by
              creating proposals and submitting them to the platform. Users can
              then cast their votes using their digital wallets. The results are
              displayed in real-time, ensuring the integrity of the voting
              process.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
