import { LoadingScreen } from "components";
import { MainLayout } from "layouts";
import React, { Fragment, Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const routes = [
  {
    path: "/",
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("pages/HomePage")),
      },
      {
        exact: true,
        path: "/voting",
        component: lazy(() => import("pages/voting")),
      },
      {
        exact: true,
        path: "/get-idea",
        component: lazy(() => import("pages/GetIDEA")),
      },
      {
        exact: true,
        path: "/swap",
        component: lazy(() => import("pages/Swapping")),
      },
      {
        exact: true,
        path: "/pools/:id",
        component: lazy(() => import("pages/PoolDetails")),
      },
      {
        exact: true,
        path: "/apply",
        component: lazy(() => import("pages/Apply")),
      },
      {
        exact: true,
        path: "/contact",
        component: lazy(() => import("pages/Contact")),
      },
      {
        exact: true,
        path: "/blog",
        component: lazy(() => import("pages/blogs")),
      },
      {
        exact: true,
        path: "/how-to-buy-nft-virtual-lands",
        component: lazy(() => import("pages/blogs/blog/Nftvirtualland")),
      },
      {
        exact: true,
        path: "/playtoearn",
        component: lazy(() => import("pages/blogs/blog/Playtoearn")),
      },
      {
        exact: true,
        path: "/a-candid-discussion-with-our-ideaology-community",
        component: lazy(() => import("pages/blogs/blog/Ideacommunity")),
      },
      {
        exact: true,
        path: "/good-news-for-ideaology-family",
        component: lazy(() => import("pages/blogs/blog/Goodnews")),
      },
      {
        exact: true,
        path: "/heartfelt-chat-with-our-ideaology-family",
        component: lazy(() => import("pages/blogs/blog/IdeaologyChat")),
      },
      {
        exact: true,
        path: "/ideaology-innovative-poll",
        component: lazy(() => import("pages/blogs/blog/Votingplateform")),
      },
      {
        exact: true,
        path: "/participate-in-mexc-and-win-ideaology-airdrops",
        component: lazy(() => import("pages/blogs/blog/ParticipateMEXC")),
      },
      {
        exact: true,
        path: "/beginners-guide-to-buy-virtual-land-in-manialands",
        component: lazy(() => import("pages/blogs/blog/Beginersguide")),
      },
      {
        exact: true,
        path: "/what-is-idea-token-and-how-idea-tokens-work",
        component: lazy(() => import("pages/blogs/blog/Cryptotokens")),
      },
      {
        exact: true,
        path: "/invest-in-the-future-of-blockchain-with-idea-token",
        component: lazy(() => import("pages/blogs/blog/InvestIdea")),
      },
      {
        exact: true,
        path: "/workaspro-is-now-live",
        component: lazy(() => import("pages/blogs/blog/WorkAsProblog")),
      },
      {
        exact: true,
        path: "/how-to-make-money-with-idea-token-remote-jobs",
        component: lazy(() => import("pages/blogs/blog/Remotejobs")),
      },
      {
        exact: true,
        path: "/dive-into-realistic-experience-of-8-ball-billiard-games-3D",
        component: lazy(() => import("pages/blogs/blog/Billiardgames3D")),
      },
      {
        exact: true,
        path: "/take-advantage-of-this-IDEA-oppurtunity-to-win-big",
        component: lazy(() => import("pages/blogs/blog/Oppurtunity")),
      },
      {
        exact: true,
        path: "/prepare-for-IDEA-trading-campaign-and-dive-into-exciting-rewards",
        component: lazy(() => import("pages/blogs/blog/Tradingcampaign")),
      },
      {
        exact: true,
        path: "/ideaology-emerges-as-top-gainer-token",
        component: lazy(() => import("pages/blogs/blog/TopGainertoken")),
      },
      {
        exact: true,
        path: "/heartfelt-chat-with-our-ideaology-family",
        component: lazy(() => import("pages/blogs/blog/Heartfeltchat")),
      },
      {
        exact: true,
        path: "/post-ama-activity-ideaology",
        component: lazy(() => import("pages/blogs/blog/Postamaactivity")),
      },
      {
        exact: true,
        path: "/great-news-fixed-promotion",
        component: lazy(() => import("pages/blogs/blog/Fixedpromotion")),
      },
      {
        exact: true,
        path: "/staking-vesting",
        component: lazy(() => import("pages/Staking/staking_vesting")),
      },
      {
        exact: true,
        path: "/vesting",
        component: lazy(() => import("pages/Vesting/VestingDetail")),
      },
      {
        exact: true,
        path: "/games",
        component: lazy(() => import("pages/Games")),
      },
      {
        exact: true,
        path: "/privacy-policy",
        component: lazy(() => import("pages/Privacy")),
      },
      {
        exact: true,
        path: "/newstaking",
        component: lazy(() => import("pages/NewStaking")),
      },
      {
        exact: true,
        path: "/terms",
        component: lazy(() => import("pages/Terms")),
      },
      {
        exact: true,
        path: "/CommingSoon",
        component: lazy(() => import("pages/CommingSoon")),
      },
      {
        exact: true,
        path: "/CommingSoon2",
        component: lazy(() => import("pages/CommingSoon2")),
      },
      {
        exact: true,
        path: "/GrantProgram",
        component: lazy(() => import("pages/GrantProgram")),
      },
      {
        exact: true,
        path: "/Ambassador",
        component: lazy(() => import("pages/Ambassador")),
      },
      {
        exact: true,
        path: "/IdeaNetwork",
        component: lazy(() => import("pages/IdeaNetwork")),
      },
      {
        path: "*",
        // eslint-disable-next-line
        component: () => <Redirect to="/" />,
      },
    ],
  },
  {
    path: "*",
    // eslint-disable-next-line
    component: () => <Redirect to="/" />,
  },
];

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route: any, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            exact={route.exact}
            key={i}
            path={route.path}
            render={(props) => (
              <Layout>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

export default routes;
