import { makeStyles } from "@material-ui/core";
import {
  Community,
  Featured,
  Features,
  Hero,
  IDEA,
  IdeaWalletSection,
  IdeaWalletSection2,
  InnovationSection,
  PoolCard,
  Subscribe,
} from "layouts";
import React, { useEffect, useState } from "react";
import { usePools } from "hooks";
import { GET_FEATURED_POOLS, GET_UPCOMING_POOLS } from "services/pool";
import { Link } from "react-router-dom";
import axios from "axios";
import { getPools } from "services/api";
import useScript from "hooks/useScriptHook";
import Staking from "pages/Staking";
import Vesting from "pages/Vesting";
import { StakingList } from "layouts/MainLayout/components/StakingList";
import { Airdropcomingsoon } from "layouts/MainLayout/components/AirdropComingSoon/Airdropcomingsoon";
import { Helmet } from "react-helmet";
import { BlogCarosuel } from "layouts/MainLayout/components/BlogCarosuel";
import { Ambassador } from "layouts/MainLayout/components/Ambassador";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#081015",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  // const { loading: upcomingLoading, pools: upcomingPools } =
  //   usePools(GET_UPCOMING_POOLS);

  // const { loading: featuredLoading, pools: featuredPools } =
  //   usePools(GET_FEATURED_POOLS);

  // // console.log("Upcoming Pools", upcomingPools);

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
        {/* <IDEA /> */}

        {/* <PoolCard /> */}
        {/* <Airdropcomingsoon /> */}
        <BlogCarosuel />
        {/* <StakingList /> */}
        {/* <Staking /> */}
        {/* <Vesting /> */}
        <InnovationSection />
        <Features />
        <div id="section-1">
          <IdeaWalletSection2 />
        </div>
        <div id="section-2">
          <IdeaWalletSection />
        </div>
        {/* 
      <Link to={`${process.env.REACT_APP_IDO_URL}pools/details/${pool._id}`}>
      </Link> */}
        {/* <PoolCard loading={upcomingLoading} name="Funded" pools={upcomingPools} /> */}
        {/* <Featured loading={featuredLoading} pools={featuredPools} /> */}
        <Subscribe />
        <Community />
        <Ambassador />
      </div>
    </div>
  );
};

export default HomePage;
