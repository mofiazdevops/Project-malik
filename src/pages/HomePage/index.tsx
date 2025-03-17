import { makeStyles } from "@material-ui/core";
import { Suspense, lazy, useEffect } from "react";
import {
  Features,
  Hero,
  IdeaWalletSection,
  IdeaWalletSection2,
  InnovationSection,
  Subscribe,
} from "layouts";
import { Helmet } from "react-helmet";
import { BlogCarosuel } from "layouts/MainLayout/components/BlogCarosuel";

const Community = lazy(() =>
  import("layouts").then((mod) => ({ default: mod.Community }))
);
const Ambassador = lazy(() =>
  import("layouts/MainLayout/components/Ambassador").then((mod) => ({
    default: mod.Ambassador,
  }))
);

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#081015",
    minHeight: "4350px",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Helmet>
          <title>
            Ideaology | Support Bright Ideas Through Decentralized Crowdfunding
          </title>
          <meta
            name="description"
            content="Ideaology is a blockchain development company that is leading the charge in creating a decentralized ecosystem of products powered by their very own cryptocurrency, IDEA. Their suite of products includes WorkAsPro, Manialand, and play-to-earn games, all of which are set to revolutionize their respective industries."
          />
        </Helmet>
      </div>
      <div className={classes.root}>
        <Hero />

        <BlogCarosuel />

        <InnovationSection />
        <Features />
        <div id="section-1">
          <IdeaWalletSection2 />
        </div>
        <div id="section-2">
          <IdeaWalletSection />
        </div>

        <Subscribe />
        <Suspense fallback={<div>Loading...</div>}>
          <Community />
          <Ambassador />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
