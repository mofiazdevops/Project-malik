import React from "react";
import "../index.css";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { Banner } from "layouts";
import clsx from "clsx";
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

export default function Tradingcampaign(props: IProps) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <meta
            name="description"
            content="Dive into the $IDEA Trading Campaign for a chance to win a share of the $20,000 IDEA prize pool! Mark your calendar from August 3rd to 10th, 2023, and showcase your trading skills. Join the excitement and trade your way to thrilling rewards!"
          />
        </Helmet>
      </div>
      <div className={clsx(classes.root, props.className)}>
        <Container className={classes.container} maxWidth="lg">
          <div className="mt-5 pt-5">
            <h1 className="blogs_content_h1">
              Prepare for the $IDEA Trading Campaign and Dive into Exciting
              Rewards!
            </h1>
            <p className="blogs_content_p">
              Get ready to participate in the thrilling $IDEA Trading Campaign
              and have the chance to share in a substantial $20,000 IDEA prize
              pool! This campaign serves as a token of our deep appreciation for
              your unwavering support.{" "}
            </p>
            <h3 className="blogs_content_h3">Campaign Duration</h3>
            <p className="blogs_content_p">
              From 08:00:00 on August 03, 2023, to 07:59:59 on August 10, 2023
              (UTC){" "}
            </p>
            <p className="blogs_content_p">
              Brace yourself for an opportunity to trade, win big, and be part
              of an exciting community activity!{" "}
            </p>
            <h3 className="blogs_content_h3">
              Campaign Overview: Join the Excitement
            </h3>
            <p className="blogs_content_p">
              Are you excited to immerse yourself in a trading campaign that
              promises high-octane trading action and offers the possibility to
              share impressive rewards? The $IDEA Trading Campaign is designed
              to celebrate our community&apos;s spirit, allowing you to reap the
              benefits of a remarkable $20,000 IDEA prize pool. We&apos;re
              thrilled to express our gratitude for your unwavering support
              through this engaging initiative.{" "}
            </p>
            <h3 className="blogs_content_h3">
              Campaign Timeline: Mark Your Calendar
            </h3>
            <p className="blogs_content_p">
              The $IDEA Trading Campaign is scheduled to unfold from 08:00:00 on
              August 03, 2023, to 07:59:59 on August 10, 2023 (UTC). This
              dedicated week presents an exceptional opportunity to showcase
              your trading skills and potentially claim a portion of the
              substantial prize pool.{" "}
            </p>
            <h3 className="blogs_content_h3">
              Participate and Triumph: How to Engage
            </h3>
            <p className="blogs_content_p">
              Participating in the $IDEA Trading Campaign is straightforward and
              exhilarating. Here&apos;s how you can jump into action and set
              your sights on winning:
            </p>
            <p className="blogs_content_p">
              Strategize Your Trades: Prepare your trading strategy to make the
              most of this exciting campaign. Your trading skills will be your
              most valuable asset during this period.
            </p>
            <h3 className="blogs_content_h3">Execute Your Trades</h3>
            <p className="blogs_content_p">
              Throughout the campaign duration, engage in trades involving the
              $IDEA token. The more you trade, the greater your chances of
              securing a share of the rewards.
            </p>
            <h3 className="blogs_content_h3">Share in the Prize Pool</h3>
            <p className="blogs_content_p">
              As a token of our gratitude, we&apos;ve set aside a substantial
              $20,000 IDEA prize pool for winners. Your active participation and
              trading efforts increase your opportunities to claim a portion of
              this impressive reward pool.
            </p>
            <h3 className="blogs_content_h3">
              Campaign Schedule: Unleash Your Potential
            </h3>

            <p className="blogs_content_p">
              From August 3rd to August 10th, 2023, the $IDEA Trading Campaign
              welcomes traders of all levels to participate and compete for
              their chance to win. Whether you&apos;re an experienced trader or
              new, this campaign invites everyone to engage and contribute to
              the exciting atmosphere.
            </p>
            <h3 className="blogs_content_h3">
              Secure Your Success: Step into the Spotlight
            </h3>
            <p className="blogs_content_p">
              As the campaign unfolds, your trading prowess, dedication, and
              enthusiasm will be pivotal in shaping your success. This campaign
              isn&apos;t just about trading – it&apos;s about showcasing your
              skills and enjoying the exhilarating journey alongside our vibrant
              community.
            </p>
            <p className="blogs_content_p">
              So, mark your calendar for August 3rd to August 10th, 2023, and
              get ready to trade, thrive, and potentially claim your share of
              the impressive $20,000 IDEA prize pool. Together, as we embark on
              this exciting venture, we eagerly anticipate celebrating your
              trading achievements and sharing in your victories!
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
