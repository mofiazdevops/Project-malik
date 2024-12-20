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

export default function Postamaactivity(props: IProps) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <meta
            name="description"
            content="We thank you for joining the KuCoin AMA with Ideaology, a platform that connects innovators, developers, and investors in one unique business network. Join the AMA Session for details"
          />
        </Helmet>
      </div>
      <div className={clsx(classes.root, props.className)}>
        <Container className={classes.container} maxWidth="lg">
          <div className="mt-5 pt-5 pb-3">
            <h1 className="blogs_content_h1">
              KuCoin Post-AMA Activity—- Ideaology (IDEA)
            </h1>
            <p className="blogs_content_p">
              We thank you for joining the #KuCoin AMA with Ideaology, a
              platform that connects innovators, developers, and investors in
              one unique business network. Ideaology launched its IDO on KuCoin
              on August 4th, and we hope you learned more about its vision,
              roadmap, and tokenomics in this AMA session.{" "}
            </p>
            <p className="blogs_content_p">
              We also hope you had fun and enjoyed the generous giveaway of
              596,500 IDEA tokens for the participants. Here are some highlights
              of the giveaway:{" "}
            </p>
            <ul>
              <li>
                The AMA was held on August 4th at 10:00 AM (UTC) on the KuCoin
                News Telegram channel. More than 2,000 people joined the channel
                and interacted with the Ideaology team.
              </li>
              <li>
                The AMA consisted of two segments: a live Q&A with the Ideaology
                team and a quiz based on the AMA content.
              </li>
              <li>
                The quiz was conducted through a Google form shared at the
                AMA&apos;s end. The form contained 10 questions related to
                Ideaology and KuCoin.
              </li>
              <li>
                To participate in the quiz, you must fill out the form with your
                correct answers, Telegram username, and KuCoin UID. You can find
                your KuCoin UID on your account page.
              </li>
              {/* <p className="blogs_content_p">The quiz rules were as follows:</p> */}
              <li>The quiz rules were as follows:</li>
              <li>
                55 qualified participants who submitted the form with ALL
                correct answers received 2,982.5 IDEA each.
              </li>
              <li>
                The form remained open five (5) days after publishing this AMA
                recap.
              </li>
            </ul>

            <p className="blogs_content_p">
              All KuCoin users were required to complete their KYC3
              verification; otherwise, they forfeited their rewards eligibility.
            </p>
            <ul>
              <li>
                Users who were not subscribed to the KuCoin News channel were
                disqualified.
              </li>
              <li>
                Users who had not joined the KuCoin Exchange Group had no
                registered Telegram username or changed their Telegram username
                was disqualified.
              </li>
              <li>
                Each participant could only use 1 Telegram account and 1 KuCoin
                UID. Multiple entries with the same Telegram account and KuCoin
                UID were disqualified.
              </li>
            </ul>
            <p className="blogs_content_p">
              The quiz winners were announced on August 23rd on the KuCoin News
              Telegram channel. The IDEA tokens were distributed to the
              winner&apos;s accounts within seven working days after the
              activity ended.{" "}
            </p>
            <p className="blogs_content_p">
              We want to congratulate all the winners and thank all the
              participants for their support and enthusiasm. We also want to
              thank Ideaology for its cooperation and generosity. We hope you
              enjoyed this AMA as much as we did. Take advantage of this
              opportunity to be part of a unique business network that connects
              innovators, developers, and investors. See you soon!{" "}
            </p>
            <a href="https://t.me/ideaologyio" className="">
              https://t.me/ideaologyio
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
