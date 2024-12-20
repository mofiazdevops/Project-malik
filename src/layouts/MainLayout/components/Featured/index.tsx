import { Button, Container, makeStyles } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
// import { FeaturedPool } from "components";
import React from "react";
import { IPool } from "store/types";
import { formatBigNumber } from "utils/formatNumber";
import { IDO_URL } from "config/constants";
import useCommonStyles from "styles/common";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "#F4F8FA",
  },
  container: {},
  textWrapper: {
    padding: "100px 12px 30px 12px",

    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",

    [theme.breakpoints.down("xs")]: {
      marginLeft: `calc((100vw - ${theme.custom.poolCardWidth})/2 - 28px)`,
    },
  },
  pinText: {
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "40px",
    color: "#1C2535",

    position: "relative",

    "&::before": {
      content: "url(/imgs/landing/pin-left-small.svg)",
      position: "absolute",
      left: "-20px",
      top: "-20px",
      zIndex: -1,
    },
  },
  poolWrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "start",
    justifyContent: "space-between",

    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  btnApply: {
    width: "200px",
    height: "40px",

    [theme.breakpoints.down("xs")]: {
      marginTop: "32px",
      width: theme.custom.poolCardWidth,
    },
  },
  break: {
    flexBasis: "100%",
    height: 0,
    display: "none",

    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  noPools: {
    width: "300px",
    height: "200px",

    marginLeft: "auto",
    marginRight: "auto",

    textAlign: "center",

    fontSize: "24px",
    lineHeight: "32px",
    color: "#1C2535",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  poolLink: {
    color: "#1C2535",
  },
}));

interface IProps {
  className?: string;
  loading: boolean;
  pools: IPool[];
}

export const Featured = (props: IProps) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.textWrapper}>
          <div className={clsx(classes.pinText, "pinText")}>
            Featured <br /> Pools
          </div>
          <div className={classes.break} />
          {/* <Button
            className={classes.btnApply}
            color="primary"
            disableElevation
            endIcon={<ChevronRightIcon />}
            href={`${IDO_URL}/apply`}
            variant="contained"
          >
            Apply for IDO
          </Button> */}
        </div>
        {props.loading ? (
          <div className={classes.noPools}>Loading pools ...</div>
        ) : props.pools.length === 0 ? (
          <div className={classes.noPools}>No pools</div>
        ) : (
          <div className={classes.poolWrapper}>
            {props.pools.map((pool: IPool) => (
              <a
                className={clsx(commonClasses.noDecoration, classes.poolLink)}
                href={`${IDO_URL}/pools/${pool.id}`}
                key={pool.id}
                rel="noreferrer"
                target="_blank"
              >
                as
                {/* <FeaturedPool
                  access={pool.poolType == 0 ? "private" : "public"}
                  current={pool.totalOwed}
                  icon={pool.metaData?.icon}
                  maxAlloc={formatBigNumber(pool.maxWei)}
                  name={pool.metaData?.projectName}
                  participants={String(pool.totalMembers || 0)}
                  ratio={String(pool.ratio || 0)}
                  status={"Active"}
                  symbol={pool.tokenData?.symbol}
                  total={pool.tokenTarget}
                /> */}
              </a>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
