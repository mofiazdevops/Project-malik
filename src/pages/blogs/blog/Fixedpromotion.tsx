import React from "react";
import "../index.css";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { Banner } from "layouts";
import clsx from "clsx";
import BlogsCardImage from "../../assets/pngs/blogs_cards.png";
import IdeatokenPic from "../../assets/pngs/Ideatokenpic.jpg";
import BlogsCardWorkAsProImage from "../../assets/pngs/blogs_workaspro.png";
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

export default function Fixedpromotion(props: IProps) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <meta
            name="description"
            content="Exciting news! Stake IDEA tokens on KuCoin Earn and enjoy a whopping 200% APR in the IDEA-30D Fixed Promotion. Limited slots available, act now for high returns and security!"
          />
        </Helmet>
      </div>
      <div className={clsx(classes.root, props.className)}>
        <Container className={classes.container} maxWidth="lg">
          <div className="mt-5 pt-5">
            <div className="">
              <h1 className="blogs_content_h1">
                Great News! IDEA-30D Fixed Promotion, Enjoy an APR of 200%
              </h1>
              <h3 className="blogs_content_h3">
                Introducing the KuCoin Earn IDEA-30D Fixed Promotion
              </h3>
              <p className="blogs_content_p">
                KuCoin Earn is pleased to announce the IDEA-30D Fixed Promotion!
                During the promotion period, users who stake IDEA tokens will
                earn an APR of up to 200%.{" "}
              </p>
              <p className="blogs_content_p">
                The promotion will run from August 23, 2023 (UTC) to September
                22, 2023 (UTC). To participate, users must first purchase IDEA
                tokens on KuCoin. Once they have purchased IDEA tokens, they can
                then stake them in the IDEA-30D Fixed Promotion.{" "}
              </p>
              <p className="blogs_content_p">
                The APR of 200% is only available for the first 100,000 IDEA
                tokens staked. After that, the APR will decrease gradually. The
                APR will be calculated daily and will be paid out in IDEA tokens
                at the end of the promotion period.{" "}
              </p>
              <h3 className="blogs_content_h3">
                Why Stake IDEA Tokens on KuCoin Earn?
              </h3>
              <p className="blogs_content_p">
                There are many reasons why you should stake IDEA tokens on
                KuCoin Earn. Here are a few of the benefits:{" "}
              </p>
              <p className="blogs_content_p">
                <b>High APR:</b>You can earn up to 200% APR on your IDEA tokens
                by staking them on KuCoin Earn. This is a much higher return
                than you would get by simply holding your IDEA tokens in a
                wallet.
              </p>
              <p className="blogs_content_p">
                <b>Security:</b>KuCoin is a secure and reliable exchange with a
                long history of providing excellent service to its users. Your
                IDEA tokens are safe and secure when they are staked on KuCoin
                Earn.
              </p>
              <p className="blogs_content_p">
                <b>Liquidity:</b>You can easily sell your IDEA tokens at any
                time after they have been staked on KuCoin Earn. This means that
                you can access your capital quickly and easily if you need to.
              </p>
              <h3 className="blogs_content_h3">
                How to Participate in the KuCoin Earn IDEA-30D Fixed Promotion
              </h3>
              <p className="blogs_content_p">Purchase IDEA tokens on KuCoin.</p>
              <p className="blogs_content_p">
                Go to the KuCoin Earn website and select the IDEA-30D Fixed
                Promotion.
              </p>
              <p className="blogs_content_p">
                Enter the amount of IDEA tokens you want to stake.
              </p>
              <p className="blogs_content_p">Click &quot;Stake&quot;.</p>
              <p className="blogs_content_p">
                Your IDEA tokens will be staked and you will start earning
                rewards immediately.
              </p>
              <h3 className="blogs_content_h3">Conclusion</h3>
              <p className="blogs_content_p">
                The KuCoin Earn IDEA-30D Fixed Promotion is a great opportunity
                to earn high returns on your IDEA tokens. The promotion is only
                available for a limited time, so be sure to participate before
                it&apos;s too late!
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
