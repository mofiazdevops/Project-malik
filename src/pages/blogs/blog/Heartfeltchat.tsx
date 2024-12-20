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

export default function Heartfeltchat(props: IProps) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <meta
            name="description"
            content="Our experts recently had a heartfelt chat with the Ideaology community, where we shared the latest updates on our products and explored the exciting partnership between Ideaology and KuCoin. Join us this session Now"
          />
        </Helmet>
      </div>
      <div className={clsx(classes.root, props.className)}>
        <Container className={classes.container} maxWidth="lg">
          <div className="mt-5 pt-5">
            <h1 className="blogs_content_h1">
              A Heartfelt Chat with Our Ideaology Family (KuCoin)
            </h1>
            <p className="blogs_content_p">
              Hey There, Ideaology Community & IDEA Holders!{" "}
            </p>
            <p className="blogs_content_p">
              Our experts shared with you the latest updates on our products,
              some of which are already launched and some of which are coming
              soon. We also had a deep dive session with Ideaology and Kucoin,
              where we explored the benefits and opportunities of our
              partnership.{" "}
            </p>
            <p className="blogs_content_p">
              If you couldn&apos;t join us for our Q&A sessions on Telegram and
              Twitter, don&apos;t worry, we have prepared a summary of the
              questions and answers for you here.{" "}
            </p>
            <h3 className="blogs_content_h3">Participants</h3>
            <p className="blogs_content_p">
              Our 2 experts participated in those sessions and answered
              questions from the audience about Ideaology and Kucoin.{" "}
            </p>
            <p className="blogs_content_p">
              They explained Kucoin benefits our community and our platform, and
              how we are working together to create a better future for the
              blockchain industry.{" "}
            </p>
            <p className="blogs_content_p">Hammad Waris (Co-Founder) </p>
            <p className="blogs_content_p">KuCoin (Host)</p>
            <h3 className="blogs_content_h3">Opening Words</h3>
            <p className="blogs_content_p">
              Co-Founder (Hammad): Good evening and welcome, everyone! I&apos;m
              glad you could join us for this session. I&apos;m sure you are all
              curious about Ideaology, the platform that empowers blockchain
              innovation by developing blockchain-based applications. IDEA is
              our native token that fuels our platform and offers various
              benefits and opportunities for our users and investors.
            </p>
            <p className="blogs_content_p">
              That&apos;s a brief introduction to who we are and what we do.
              Now, let&apos;s get to the main part of this session, the Q&A,
              where I will answer your questions and share our roadmap with you.
              I&apos;m excited to show you what we have achieved and what we are
              working on!
            </p>
            <h3 className="blogs_content_h3">Pre-Collected Question</h3>
            <p className="blogs_content_p" style={{ fontWeight: "bold" }}>
              Q. KuCoin: What are the products that Ideaology offers?
            </p>
            <p className="blogs_content_p">
              <span style={{ fontWeight: "bold" }}>A.</span> Hammad: There are
              so many exciting products that Ideaology offers to our community
              and the blockchain industry. Some of the products that we are
              proud of are Manialands, NFT games, WorkAsPro, and Voting
              platforms.
            </p>
            <p className="blogs_content_p">
              First of all, thanks to you guys who support us. It’s all become
              possible because of you. We understand that crypto will be the
              future of currency, so we thought, why not develop products that
              pay in crypto? So we developed a Freelancing platform and
              play-to-earn games. Now we are working on blockchain technology to
              develop cutting-edge solutions for you!
            </p>
            <p className="blogs_content_p" style={{ fontWeight: "bold" }}>
              Q. KuCoin: What are the most popular features of Ideaology&apos;s
              products?
            </p>
            <p className="blogs_content_p">
              <span style={{ fontWeight: "bold" }}>A.</span> Hammad: That&apos;s
              a great question. As we already discussed Ideaology&apos;s
              products are blockchain-based and designed to offer various
              benefits and features to our users and investors. Some of the most
              popular features of our products are easy to use, pay in
              cryptocurrency, and more secure.
            </p>
            <h3 className="blogs_content_h3">Live Questions</h3>
            <p className="blogs_content_p" style={{ fontWeight: "bold" }}>
              Q. KuCoin: What are the company&apos;s plans for expansion?
            </p>
            <p className="blogs_content_p">
              <span style={{ fontWeight: "bold" }}>A.</span> Hammad: Okay, so I
              know this is the question roaming around in a lot of minds because
              of the current situation discouraging for some investors but I
              assure you that Ideaology has a solid vision and a strong roadmap
              for the future.
            </p>
            <p className="blogs_content_p" style={{ fontWeight: "bold" }}>
              Q. KuCoin: What are the company&apos;s financial projections?
            </p>
            <p className="blogs_content_p">
              <span style={{ fontWeight: "bold" }}>A.</span> Hammad: Thank-You
              for your question. The company&apos;s financial projections are
              based on realistic assumptions and market research, and they show
              the potential of the IDEA token and the Active IDEA platform.
            </p>
            <p className="blogs_content_p" style={{ fontWeight: "bold" }}>
              Q. KuCoin: How does Ideaology&apos;s business model work?
            </p>
            <p className="blogs_content_p">
              <span style={{ fontWeight: "bold" }}>A. Hammad:</span>{" "}
              Ideaology&apos;s business model is based on creating a platform
              that connects innovators, developers, and investors in one unique
              business network. The platform is called Active IDEA, and it aims
              to provide a comprehensive solution for launching and scaling
              innovative projects, from ideation to crowdfunding.
            </p>
            <p className="blogs_content_p">
              Thanks for your time! Join us on Twitter, LinkedIn, and Telegram!
            </p>
            <p className="blogs_content_p">
              I hope to see you again soon on the Active IDEA platform. Have a
              wonderful day!
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
