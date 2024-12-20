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

export default function WorkAsProblog(props: IProps) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <meta
            name="description"
            content="Say goodbye to traditional job searches and hello to WorkAsPro. Discover your dream job and get paid in the currency of the future - crypto."
          />
        </Helmet>
      </div>
      <div className={clsx(classes.root, props.className)}>
        <Container className={classes.container} maxWidth="lg">
          <div className="mt-5 pt-5">
            <h1 className="blogs_content_h1">WorkAsPro is Now Launched!</h1>
            <h3 className="blogs_content_h3">
              Ready to Work Like a Pro? WorkAsPro is Now Live!
            </h3>
            <p className="blogs_content_p">
              Say goodbye to traditional job searches and hello to WorkAsPro.
              Discover your dream job and get paid in the currency of the future
              - crypto.{" "}
            </p>
            <h3 className="blogs_content_h3">What is WorkAsPro?</h3>
            <p className="blogs_content_p">
              WorkAsPro is a blockchain-based freelancing platform that offers a
              secure and efficient way for freelancers and clients to connect
              and transact. WorkAsPro operates on a decentralized network,
              meaning transactions are secure, transparent, and free from
              intermediaries. Freelancers can offer services and receive
              cryptocurrency payments, while clients can hire freelancers and
              pay them directly in crypto.{" "}
            </p>
            <h3 className="blogs_content_h3">
              How Can WorkAsPro Benefit You as a Seller (Freelancer)?
            </h3>
            <p className="blogs_content_p">
              Let’s look at how this decentralized freelancing platform can
              benefit you as a Seller:{" "}
            </p>
            <h4 className="blogs_content_h4 text-secondary">
              Access to a global market
            </h4>
            <p className="blogs_content_p">
              WorkAsPro is a platform that operates globally, which means that
              you can offer your services to clients worldwide. This can help
              you expand your client base and increase your earnings.
            </p>
            <h4 className="blogs_content_h4 text-secondary">
              Fast and secure payments
            </h4>
            <p className="blogs_content_p">
              WorkAsPro pays in cryptocurrency, which means that payments are
              fast and secure. You don&apos;t have to worry about payment delays
              and wait for weeks to get paid instead; you&apos;ll get paid the
              time buyer accepts your order.
            </p>
            <h4 className="blogs_content_h4 text-secondary">
              No intermediaries
            </h4>
            <p className="blogs_content_p">
              WorkAsPro operates on a decentralized network, meaning no
              intermediaries are involved in transactions. This can help you
              save money on transaction fees and ensure that you receive the
              full payment in IDEA tokens for your services.
            </p>
            <h4 className="blogs_content_h4 text-secondary">
              Reputation system
            </h4>
            <p className="blogs_content_p">
              This freelancing platform has a reputation system that allows
              clients to rate and review freelancers. This can help you build a
              strong reputation on the platform, leading to more clients and
              higher earnings.
            </p>
            <h4 className="blogs_content_h4 text-secondary">Transparency</h4>
            <p className="blogs_content_p">
              WorkAsPro operates on a transparent network, meaning all
              transactions are recorded on a public ledger. This can help you
              build trust with clients and ensure that you receive fair payment
              for your services.
            </p>
            <h3 className="blogs_content_h3">
              How Can WorkAsPro Benefit You as a Buyer (Business)?
            </h3>
            <p className="blogs_content_p">
              Let’s look at how this decentralized freelancing platform can
              benefit you as a Buyer:{" "}
            </p>
            <h4 className="blogs_content_h4 text-secondary">
              Access to a global talent pool
            </h4>
            <p className="blogs_content_p">
              With WorkAsPro, you have access to a global talent pool of skilled
              freelancers. This can help you find the right person for the job,
              no matter where they are located.
            </p>
            <h4 className="blogs_content_h4 text-secondary">
              Fast and cost-effective payments{" "}
            </h4>
            <p className="blogs_content_p">
              WorkAsPro pays in cryptocurrency, which means that payments are
              fast and cost-effective. You don&apos;t have to worry about
              expensive international wire transfers or currency conversion
              fees.
            </p>
            <h4 className="blogs_content_h4 text-secondary">
              Escrow Payment Method{" "}
            </h4>
            <p className="blogs_content_p">
              WorkAsPro uses an Escrow payment method where your payment will be
              saved and only sent to the seller once you get satisfied with your
              project and complete the order.{" "}
            </p>
            <h3 className="blogs_content_h3">Product of Ideaology</h3>
            <p className="blogs_content_p">
              WorkAsPro is a product of Ideaology, which utilizes the IDEA
              token. As a blockchain-based freelancing platform, WorkAsPro is
              designed to help freelancers and clients connect in a secure and
              transparent environment.{" "}
            </p>
            <p className="blogs_content_p">
              One of the benefits of using WorkAsPro is the ability to receive
              payments in cryptocurrency, including the IDEA token. This can
              help freelancers and clients avoid the high fees associated with
              traditional payment methods and benefit from the security and
              transparency of blockchain technology.
            </p>
            <p className="blogs_content_p">
              It is an excellent platform for founders to find and hire talented
              freelancers and create early teams for their cryptocurrency
              projects. As a decentralized freelance application, WorkAsPro can
              also help developers find new projects and opportunities to
              collaborate with other professionals in the blockchain space.
            </p>
            <p className="blogs_content_p">
              By utilizing the IDEA token on the WorkAsPro platform, users can
              benefit from a seamless payment process, a secure and transparent
              environment, and 100% payment for freelancing and project
              collaboration. This helps to further the overall goal of
              Ideaology, which is to connect different types of users in a
              single platform to create a thriving ecosystem that covers all
              aspects of cryptocurrency projects, from initial idea to
              crowdfunding and beyond.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
