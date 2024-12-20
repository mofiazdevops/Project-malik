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

export default function Opportunity(props: IProps) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <meta
            name="description"
            content="Seize the IDEA opportunity! Join the Ideaology Giveaway for a chance to win over 3 million IDEA tokens, valued at $7,000. Act now for a chance to enhance your financial portfolio!"
          />
        </Helmet>
      </div>
      <div className={clsx(classes.root, props.className)}>
        <Container className={classes.container} maxWidth="lg">
          <div className="mt-5 pt-5">
            <h1 className="blogs_content_h1">
              Take advantage of this IDEA opportunity to win big!
            </h1>
            <p className="blogs_content_p">
              Are you ready to seize a golden opportunity to win substantial
              rewards?{" "}
            </p>
            <p className="blogs_content_p">
              The Ideaology Giveaway presents an exciting prospect for you to
              walk away with a prize of over +3 million IDEA tokens, equivalent
              to a remarkable $7,000 in value.{" "}
            </p>
            <p className="blogs_content_p">
              These IDEA tokens hold a significant role as the utility and
              payment currency that fuels the Ideaology platform, a cutting-edge
              ecosystem designed to unite innovators, developers, and investors
              within a singular and dynamic business network. This platform is a
              hub for launching and advancing groundbreaking projects, covering
              the entire journey from concept creation to successful
              crowdfunding.{" "}
            </p>
            <p className="blogs_content_p">Participation Made Simple: </p>
            <p className="blogs_content_p">
              Taking part in the Ideaology Giveaway is straightforward and
              uncomplicated. All you need to do is follow these easy steps to
              secure your entry:
            </p>
            <h3 className="blogs_content_h3">Access the Link</h3>
            <p className="blogs_content_p">
              Begin by clicking on the provided link: [giveaway.com]. This link
              will direct you to a Google form where you can conveniently input
              your details and officially enter the giveaway.{" "}
            </p>
            <h3 className="blogs_content_h3">Connect on Social Media</h3>
            <p className="blogs_content_p">
              Stay connected with Ideaology through their official social media
              channels on Twitter, Telegram, and Medium. These platforms serve
              as conduits for the latest news and updates from Ideaology. You
              can find the links to their channels on their website or directly
              within the Google form.{" "}
            </p>
            <h3 className="blogs_content_h3">Spread the Word</h3>
            <p className="blogs_content_p">
              To increase your chances, retweet the designated giveaway tweet
              and tag three friends. This simple action assists in amplifying
              awareness about both the giveaway and the Ideaology platform. Look
              for the giveaway tweet on Ideaology&apos;s Twitter page or in
              Google form.
            </p>
            <h3 className="blogs_content_h3">Complete the Form</h3>
            <p className="blogs_content_p">
              Ensure you furnish accurate answers in the provided form,
              including your Telegram username and KuCoin UID. Your KuCoin UID
              can be located on your account page. Remember, having a KuCoin
              account is essential, and to qualify for the rewards, complete
              your KYC3 verification.
            </p>
            <h3 className="blogs_content_h3">Answer Question</h3>
            <p className="blogs_content_p">
              The form will include ten questions linked to both Ideaology and
              KuCoin. Thoughtfully respond to these queries to further
              demonstrate your engagement and understanding.
            </p>
            <h3 className="blogs_content_h3">Seize the Opportunity</h3>
            <p className="blogs_content_p">
              Essential Details to Note, It&apos;s important to understand some
              vital points to maximize your participation:
            </p>
            <h3 className="blogs_content_h3">Giveaway Duration</h3>

            <p className="blogs_content_p">
              Unlike traditional giveaways with specific end times, the
              Ideaology Giveaway operates without an end time. Your chances
              remain open, and your potential rewards can be secured anytime.
            </p>
            <h3 className="blogs_content_h3">Winner Selection</h3>
            <h3 className="blogs_content_h3">Reward Distribution</h3>
            <p className="blogs_content_p">
              The winners will be chosen through a random selection process and
              will be announced on the KuCoin platform. This unbiased method
              ensures equal opportunity for all participants.
            </p>
            <h3 className="blogs_content_h3">Reward Distribution</h3>
            <p className="blogs_content_p">
              Following the announcement of winners, the IDEA tokens will be
              distributed directly to the wallets of the lucky recipients. You
              can anticipate receiving your rewards within seven days after the
              official announcement.
            </p>
            <p className="blogs_content_p">
              In summary, the Ideaology Giveaway offers you a shot at winning
              significant rewards and provides an excellent opportunity to
              become familiar with the transformative Ideaology platform. By
              actively engaging, you can secure your share of +3 million IDEA
              tokens and become part of an innovative ecosystem that nurtures
              groundbreaking ideas from inception to realization. Don&apos;t
              miss this chance to enrich your experience and enhance your
              financial portfolio!
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
