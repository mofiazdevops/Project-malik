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

export default function Ideacommunity(props: IProps) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <meta
            name="description"
            content="Our mavericks discussed the recently launched products or are on their way to launch. No harsh feelings if you missed our QAs sessions on Telegram and Twitter; we’ll tell you what the questions were and how our mavericks answered them here!"
          />
        </Helmet>
      </div>
      <div className={clsx(classes.root, props.className)}>
        <Container className={classes.container} maxWidth="lg">
          <div className="mt-5 pt-5">
            <h1 className="blogs_content_h1">
              A Candid Discussion with Our Ideaology Community
            </h1>
            <p className="blogs_content_p">
              Hey There, Ideaology Community & IDEA Holders!{" "}
            </p>
            <p className="blogs_content_p">
              Here’s the recap if you, unfortunately, missed our Telegram
              chit-chat and Twitter Spaces.
            </p>
            <p className="blogs_content_p">
              Our mavericks discussed the recently launched products or are on
              their way to launch. No harsh feelings if you missed our QAs
              sessions on Telegram and Twitter; we’ll tell you what the
              questions were and how our mavericks answered them here!
            </p>
            <h4 className="blogs_content_h4 text-secondary">Participants </h4>
            <p className="blogs_content_p">
              Our 4 Mavericks took part in those sessions and cleared questions
              in the audience&apos;s minds about IDEA:
            </p>
            <p className="blogs_content_p mb-0">
              Chief Dreamer 🌟 (Founder & CEO)
            </p>
            <p className="blogs_content_p mb-0">
              Captain Sparkle ✨( Co-founder )
            </p>
            <p className="blogs_content_p mb-0">
              Debugging Duckling 🐥 (Tech Lead)
            </p>
            <p className="blogs_content_p">PR Pixie 🧚‍♀️ ( Marketing Manager )</p>
            <p className="blogs_content_p">
              PR Pixie 🧚‍♀️ was the host of the session!
            </p>
            <h3 className="blogs_content_h3">Opening Words</h3>
            <p className="blogs_content_p">
              <span className="fw-bold">Chief Dreamer 🌟:</span> Good evening,
              everyone! Thanks to everyone that you guys joined. So, I’m
              assuming that most of you know us, “Ideaology” and, of course, the
              IDEA token. Let me introduce it to those who don’t know who we
              are, what we do, and what IDEA is. Ideaology is a platform that
              promotes blockchain by developing blockchain-based applications.
              IDEA is a token for this platform that uses in different
              applications and for crypto investment, of course!
            </p>
            <p className="blogs_content_p">
              Okay, I think that’s enough introduction. Let’s move forward to
              our Question & Answers session, for which we all are here. I’m
              excited to share our roadmap with you and show you what we’ve done
              and what we’re doing!
            </p>
            <h3 className="blogs_content_h3 mb-4">Pre-Collected Questions </h3>
            <p className="blogs_content_p fw-bold">
              Q. PR Pixie 🧚‍♀️: What is the development roadmap of Ideaology for
              this year till now?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Chief Dreamer 🌟 :
              </span>{" "}
              There are a lot of exciting projects we are working on. The major
              highlight of this year until now is WorkAsPro.
            </p>
            <p className="blogs_content_p">
              First of all, thanks to you guys who support us. It’s all become
              possible because of you. We understand that crypto will be the
              future of currency, so we thought, why not develop a freelancing
              platform that pays in crypto? So, we developed a freelancing
              platform (WorkAsPro) on blockchain technology. Freelancers can
              earn in IDEA tokens and get 100% payment without any platform fee.
              Some other cryptocurrency options are also available.
            </p>
            <p className="blogs_content_p">
              Besides this, we developed the games “Real 8 Ball Poll,” “Save the
              Pupp,” and “Car Racing Game.” These games are play-to-earn games
              where players can earn different prizes and IDEA tokens.
            </p>
            <p className="blogs_content_p">
              Now, we are working on NFT Marketplace development where users can
              sell their NFTs and earn. We are working on blockchain technology
              to develop cutting-edge solutions for you!
            </p>
            <p className="blogs_content_p fw-bold">
              Q. PR Pixie 🧚‍♀️: What is so special about your freelancing
              platform?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Debugging Duckling 🐥:
              </span>{" "}
              As you all know, cryptocurrency is booming right now. Most people
              want to get paid in crypto, and many businesses also pay them in
              crypto. Even though we’re paying our employees in crypto. So, back
              to your question, what makes WorkAsPro so special for us and other
              crypto lovers is its innovative platform. I mean, who doesn’t want
              to use a secure and transparent freelancing platform that makes
              sure everything goes smoothly?
            </p>
            <p className="blogs_content_p">
              WorkAsPro is also the best platform to find talent, as it has
              strong AI that prevents any fraudulent activity. When the project
              starts, the payment from Buyer is transferred to Escrow and then
              released when Buyer accepts the project from Seller. It’s good
              news for both Seller and Buyer that their payment is safe.
            </p>
            <p className="blogs_content_p">
              Also, this platform charges the lowest platform fee, and, in the
              case of the IDEA tokens, it doesn’t even charge any fee. So, what
              else could be better? It’s the best platform in every aspect!
            </p>
            <p className="blogs_content_p fw-bold">
              Q. PR Pixie 🧚‍♀️: Can IDEA tokens be used to make purchases in
              everyday life, or are they primarily used for investment purposes?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Captain Sparkle ✨:
              </span>{" "}
              Our team is working on making the best possibilities to use IDEA
              in everyday life. We have developed WorkAsPro, which is a strong
              use case in this aspect where you can find jobs and then get paid
              in IDEA tokens.
            </p>
            <p className="blogs_content_p">
              IDEA tokens are greatly appreciated for investment. You can buy
              IDEA tokens now; with time, the prices will go high, and you can
              earn potential profit.
            </p>
            <p className="blogs_content_p fw-bold">
              Q. PR Pixie 🧚‍♀️: How do you see IDEA evolving over the next few
              years?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Chief Dreamer 🌟:{" "}
              </span>{" "}
              Ideaology is working on the development of future-focused
              applications. Manialands, WorkAsPro, and NFT Marketplace are our
              quite big projects. All these platforms and our play-to-earn games
              use IDEA tokens. So, there is high chance that IDEA is going to
              boom and make history like some other potential cryptocurrencies.
            </p>
            <p className="blogs_content_p fw-bold">
              Q. PR Pixie 🧚‍♀️: Are there any exciting new developments or
              innovations in the Ideaology space that you&apos;re particularly
              excited about?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Debugging Duckling 🐥:{" "}
              </span>{" "}
              Yeah, we are thrilled to announce that our freelancing platform
              WorkAsPro is live now. You can buy or sell a wide range of
              services at the best prices. We are also developing NFT
              Marketplace and IDEA Wallet.
            </p>
            <p className="blogs_content_p fw-bold">
              Q. PR Pixie 🧚‍♀️: What are some common mistakes or misconceptions
              people have when it comes to buying and selling IDEA tokens?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Chief Dreamer 🌟:{" "}
              </span>{" "}
              I think people still can’t understand cryptocurrency properly.
              Sometimes, they become blindfolded when investing in some coin or
              token and then blame the platform for it. The crypto market is
              volatile. Every cryptocurrency sees ups and downs, so it doesn’t
              always mean that that particular coin or token will never rise
              again. Same with our case, unfortunately, our token is going
              through a bit of a downfall that is quite beneficial for a lot of
              investors who can invest at a low price and then generate revenue
              from it. But on the other hand, some get disappointed. But we can
              assure you IDEA is going to see good days soon.
            </p>
            <p className="blogs_content_p fw-bold">
              Q. PR Pixie 🧚‍♀️: What advice would you give to someone who is
              interested in investing in IDEA for the first time?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Captain Sparkle ✨:{" "}
              </span>{" "}
              Well, I would suggest going through the history of the token in
              which you are going to invest. See if the platform is developing
              new solutions that can promote that particular token, and yeah,
              the same is the case with IDEA tokens.
            </p>
            <h3 className="blogs_content_h3 mb-4">Live Questions</h3>
            <p className="blogs_content_p fw-bold">
              Q. When can we expect IDEA pump?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Captain Sparkle ✨:{" "}
              </span>{" "}
              Okay, so I know this is the question roaming around in a lot of
              minds because of the current dip in IDEA tokens. But as you all
              know, the crypto market was unstable in past times, which caused a
              lot of dips even for the top cryptocurrencies. Well, back to your
              question, Ideaology is working on a lot of developments and
              innovations. It will increase the use cases of IDEA tokens which
              will eventually increase their value. And trust me, that time is
              close!
            </p>
            <p className="blogs_content_p fw-bold">
              Q. How do you see the Crypto market evolving over the next 5-10
              years, and what opportunities do you see for investors?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Chief Dreamer 🌟:{" "}
              </span>
              The crypto market is growing fast. It’s hard to predict the future
              as we all have seen rapid ups and downs. However, I believe that
              we will continue to see increasing adoption and mainstream
              acceptance of cryptocurrencies.
            </p>
            <p className="blogs_content_p fw-bold">
              Q: What are some real-world use cases for IDEA tokens?
            </p>
            <p className="blogs_content_p">
              <span className="fw-bold ms-lg-5 ms-3">
                A . &nbsp;Debugging Duckling 🐥:{" "}
              </span>
              IDEA token has several use cases within different applications.
              IDEA tokens are used in WorkAsPro as a means of payment for
              freelancers. It is being used in play-to-earn games as a reward
              for players who achieve certain milestones. NFT Marketplace and
              Manialands also use IDEA tokens to purchase and trade NFTS and
              other game assets.
            </p>
            <p className="blogs_content_p">
              Thanks for your time! Join us on Twitter, LinkedIn, and Telegram!
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
