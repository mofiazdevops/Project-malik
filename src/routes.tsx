import React, { Fragment, Suspense, lazy, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LoadingScreen } from "components";
import { MainLayout } from "layouts";

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
      // {
      //   exact: true,
      //   path: "/voting",
      //   component: lazy(() => import("pages/voting")),
      // },
      // {
      //   exact: true,
      //   path: "/get-idea",
      //   component: lazy(() => import("pages/GetIDEA")),
      // },
      {
        exact: true,
        path: "/swap",
        component: lazy(() => import("pages/Swapping")),
      },
      // {
      //   exact: true,
      //   path: "/pools/:id",
      //   component: lazy(() => import("pages/PoolDetails")),
      // },
      // {
      //   exact: true,
      //   path: "/apply",
      //   component: lazy(() => import("pages/Apply")),
      // },
      // {
      //   exact: true,
      //   path: "/contact",
      //   component: lazy(() => import("pages/Contact")),
      // },
      {
        exact: true,
        path: "/blog",
        component: lazy(() => import("pages/blogs")),
      },
      // {
      //   exact: true,
      //   path: "/docs",
      //   component: lazy(() => import("pages/Documentation")),
      // },
      // {
      //   exact: true,
      //   path: "/staking-vesting",
      //   component: lazy(() => import("pages/Staking/staking_vesting")),
      // },
      // {
      //   exact: true,
      //   path: "/vesting",
      //   component: lazy(() => import("pages/Vesting/VestingDetail")),
      // },
      // {
      //   exact: true,
      //   path: "/games",
      //   component: lazy(() => import("pages/Games")),
      // },
      // {
      //   exact: true,
      //   path: "/privacy-policy",
      //   component: lazy(() => import("pages/Privacy")),
      // },
      {
        exact: true,
        path: "/newstaking",
        component: lazy(() => import("pages/NewStaking")),
      },
      // {
      //   exact: true,
      //   path: "/CommingSoon",
      //   component: lazy(() => import("pages/CommingSoon")),
      // },
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
        exact: true,
        path: "/:url",
        component: lazy(() => import("pages/BlogPage")),
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
