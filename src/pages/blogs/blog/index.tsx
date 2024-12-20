import React from "react";
import "./index.css";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { Banner } from "layouts";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    position: "relative",
  },
}));

interface IProps {
  className?: string;
}

export default function BlogDetails(props: IProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <Banner subTitle="" title="Blog" />
      <Container className={classes.container} maxWidth="lg">
        <div className="blogs">
          {Array(5)
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
            ))}
        </div>
      </Container>
    </div>
  );
}
