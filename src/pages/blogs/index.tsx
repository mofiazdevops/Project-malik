import React from "react";
import "./index.css";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { Banner } from "layouts";
import clsx from "clsx";
import BlogsCardImage from "../../assets/pngs/blogs_cards.png";
import BlogsCardtokenImage from "../../assets/pngs/Black Blue  people profession Twitter Header.png";
import IdeatokenPic from "../../assets/pngs/Ideatokenpic.jpg";
import BlogsCardWorkAsProImage from "../../assets/pngs/blogs_workaspro.png";
import VirtuallandImage from "../../assets/pngs/Virtualland.png";
import CommunityImage from "../../assets/pngs/CommunityImage.png";
import PlaytoearnImage from "../../assets/pngs/PlaytoEarnimage.png";
import RemotejobImage from "../../assets/pngs/Remotejobs.png";
import OppurtunityImage from "../../assets/pngs/Oppurtunity.jpg";
import TradingImage from "../../assets/pngs/Trading.jpg";
import SpaceImage from "../../assets/pngs/space.jpg";
import PostamaImage from "../../assets/pngs/Postama.jpg";
import TopgainerImage from "../../assets/pngs/Topgainer.jpg";
import FixedPromotionImage from "../../assets/pngs/Fixedpromotion.png";
import Billiard3Dimage from "../../assets/pngs/billiard_games_img.png";
import Goodnewsimage from "../../assets/pngs/Goodnewsimage.jpg";
import partcipatemexcimg from "../../assets/pngs/airdropsimg.jpg";
import ideaologychatimg from "../../assets/pngs/ideaologychatimage.jpg";
import votingplateformImg from "../../assets/pngs/votingplateform.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    position: "relative",
  },
}));

interface IProps {
  className?: string;
}

export default function Blogs(props: IProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <Banner subTitle="" title="Blog" />
      <Container className={classes.container} maxWidth="lg">
        <div className="blogs">
          {/* {Array(5)
            .fill("")
            .map((item: any, i: any) => (
              <div className="blog" key={i}>
                <div className="blog__txt">
                  <Typography variant="h3">
                    Why Every Developer Should Have A Blog
                  </Typography>
                  <div style={{ opacity: "0.7" }}>
                    <Typography variant="caption">5 mint read</Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies...
                    </Typography>
                  </div>
                </div>
                <div className="blog__img">
                  <img
                    src="/simpson.png"
                    alt=""
                    style={{ maxWidth: "300px" }}
                  />
                </div>
              </div>
            ))} */}
          <div className="">
            {/* <!-- Blogs Starts Here --> */}

            <section id="upcoming_events">
              <div className="container">
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2>Ideaology 3.0 Initiative Poll </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Ideaology is excited to announce the launch of its 3.0
                          network and is seeking your valuable input to shape
                          this decision. Ideaology is offering a reward of
                          1,000,000 Idea Coins to participants.{" "}
                        </p>
                        <div>
                          <Link
                            to="/ideaology-innovative-poll"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={votingplateformImg}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2>
                          A Heartfelt Chat with Our Ideaology Family (KuCoin){" "}
                        </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Our experts recently had a heartfelt chat with the
                          Ideaology community, where we shared the latest
                          updates on our products and explored the exciting
                          partnership between Ideaology and KuCoin.{" "}
                        </p>
                        <div>
                          <Link
                            to="/heartfelt-chat-with-our-ideaology-family"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={ideaologychatimg}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2>Win Free 43,000,000 Ideaology (IDEA) Airdrops </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Hello, Ideaology Family, good news for you! Welcome to
                          today&apos;s exciting blog post where we&apos;ll be
                          discussing the MEXC Kickstarter campaign and how you
                          could possibly win an astonishing 43 million Ideaology
                          (IDEA) tokens via airdrops.{" "}
                        </p>
                        <div>
                          <Link
                            to="/participate-in-mexc-and-win-ideaology-airdrops"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={partcipatemexcimg}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2>Good News For Ideaology Family </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Are you ready to revolutionize your token development
                          experience? Look no further than the Polygon network.
                          With its efficient and cost-effective services,
                          Polygon is changing the game in the blockchain world.{" "}
                        </p>
                        <div>
                          <Link
                            to="/good-news-for-ideaology-family"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={Goodnewsimage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2>8 Ball Billiard Games 3D </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          With its multiplayer option, this game is perfect for
                          those seeking friendly matches. Powered by the latest
                          technology, it offers the most exciting and realistic
                          billiards simulator available.{" "}
                        </p>
                        <div>
                          <Link
                            to="/dive-into-realistic-experience-of-8-ball-billiard-games-3D"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={Billiard3Dimage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> Great News! IDEA-30D Fixed Promotion </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          KuCoin Earn is pleased to announce the IDEA-30D Fixed
                          Promotion! During the promotion period, users who
                          stake IDEA tokens will earn an APR of up to 200%.{" "}
                        </p>
                        <div>
                          <Link
                            to="/great-news-fixed-promotion"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={FixedPromotionImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> Opportunity to Win Big </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          The Ideaology Giveaway presents an exciting prospect
                          for you to walk away with a prize of over +3 million
                          IDEA tokens, equivalent to a remarkable $7,000 in
                          value.{" "}
                        </p>
                        <div>
                          <Link
                            to="/take-advantage-of-this-IDEA-oppurtunity-to-win-big"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={OppurtunityImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> $IDEA Trading Campaign </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Get ready to participate in the thrilling $IDEA
                          Trading Campaign and have the chance to share in a
                          substantial $20,000 IDEA prize pool!{" "}
                        </p>
                        <div>
                          <Link
                            to="/prepare-for-IDEA-trading-campaign-and-dive-into-exciting-rewards"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={TradingImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> Top Crypto Gainer </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          In the ever-evolving landscape of the crypto market,
                          specific tokens rise above the rest, redefining what
                          it means to achieve remarkable gains.{" "}
                        </p>
                        <div>
                          <Link
                            to="/ideaology-emerges-as-top-gainer-token"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={TopgainerImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> A Heartfelt Chat with our Ideaology Family </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Our experts shared with you the latest updates on our
                          products, some of which are already launched and some
                          of which are coming soon.{" "}
                        </p>
                        <div>
                          <Link
                            to="/heartfelt-chat-with-our-ideaology-family"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={SpaceImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> KuCoin Post-AMA Activity </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          We thank you for joining the #KuCoin AMA with
                          Ideaology, a platform that connects innovators,
                          developers, and investors in one unique business
                          network.{" "}
                        </p>
                        <div>
                          <Link
                            to="/post-ama-activity-ideaology"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={PostamaImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4 discover_text">
                          DISCOVER
                        </h6>
                        <h2>Beginner’s Guide</h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Those who want to diversify their holdings into the
                          virtual world must buy NFT real estate in Manialands.
                          When it comes to virtual land ownership platforms, no
                          one does it better than Manialands, which is why so
                          many gamers, artists, and would-be entrepreneurs use
                          it.{" "}
                        </p>
                        <div>
                          <Link
                            to="/beginners-guide-to-buy-virtual-land-in-manialands"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={BlogsCardImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4 discover_text">
                          DISCOVER
                        </h6>
                        <h2>Crypto Tokens</h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          In a world where digital currencies reign supreme
                          crypto tokens have emerged as a unique and
                          increasingly popular asset. But what exactly are
                          crypto tokens, and how do they work? In this article,
                          we&apos;ll dive into cryptocurrency tokens, exploring
                          their definition, types, and of course, our favorite
                          IDEA token.
                        </p>
                        <div>
                          <Link
                            to="/what-is-idea-token-and-how-idea-tokens-work"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={BlogsCardtokenImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2>Invest in IDEA token</h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          IDEA token is the native cryptocurrency that powers
                          Ideaology&apos;s ecosystem of products. By utilizing
                          IDEA, users can access Ideaology&apos;s suite of
                          products while also participating in community-driven
                          decision-making through Ideaology&apos;s DAO
                          (Decentralized Autonomous Organization).{" "}
                        </p>
                        <div>
                          <Link
                            to="/invest-in-the-future-of-blockchain-with-idea-token"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={IdeatokenPic}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> WorkAsPro is Now Launched!</h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          WorkAsPro is a blockchain-based freelancing platform
                          that offers a secure and efficient way for freelancers
                          and clients to connect and transact. WorkAsPro
                          operates on a decentralized network, meaning
                          transactions are secure, transparent, and free from
                          intermediaries.{" "}
                        </p>
                        <div>
                          <Link
                            to="/workaspro-is-now-live"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={BlogsCardWorkAsProImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> NFT Virtual Land</h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          The popularity of the Metaverse is at an all-time
                          high. NFT virtual land parcels are in high demand, and
                          for a good reason. You can make a significant impact
                          in the online world by purchasing one of these virtual
                          plots of land. There is a proliferation of online
                          casinos as well as virtual art museums.{" "}
                        </p>
                        <div>
                          <Link
                            to="/how-to-buy-nft-virtual-lands"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={VirtuallandImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2>Play to Earn</h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Play-to-earn games are business models that are built
                          on the Blockchain and include internal models that
                          provide tokens to players for completing specific
                          tasks. Gamers can collect crypto as they play, earning
                          in-game non-fungible tokens that show different
                          characters and items.{" "}
                        </p>
                        <div>
                          <Link to="/playtoearn" className="btn read_more">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={PlaytoearnImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> Ideaology Community </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          Our mavericks discussed the recently launched products
                          or are on their way to launch. No harsh feelings if
                          you missed our QAs sessions on Telegram and Twitter;
                          we’ll tell you what the questions were and how our
                          mavericks answered them here!{" "}
                        </p>
                        <div>
                          <Link
                            to="/a-candid-discussion-with-our-ideaology-community"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={CommunityImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow_container my-lg-3 mt-md-3 mb-md-3 mt-3 mb-3 pb-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pt-lg-4 ps-lg-4 ps-md-3 ps-3 pe-3">
                        <h6 className="pt-lg-1 pt-md-4 pt-4">DISCOVER</h6>
                        <h2> Remote Jobs </h2>
                        <p className="pe-lg-5 pe-md-3 pe-2">
                          You can do freelancing on a platform like WorkAsPro to
                          get paid in IDEA tokens or other cryptocurrencies, or
                          you can freelance to create your own products, and
                          review different services.{" "}
                        </p>
                        <div>
                          <Link
                            to="/how-to-make-money-with-idea-token-remote-jobs"
                            className="btn read_more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="px-3 pt-4 d-flex justify-content-end">
                        <img
                          src={RemotejobImage}
                          className="img-fluid blogs_card_image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Blogs Ends Here --> */}
            {/* Read More on Medium Here  */}
            <div className="d-flex justify-content-center mt-lg-5">
              <a
                href="https://ideaologyio.medium.com/"
                target="_blank"
                className="click_here_text"
                rel="noreferrer noopener"
              >
                Click here to read more
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
