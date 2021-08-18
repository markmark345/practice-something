import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1 className={classes.title}>HOME PAGE</h1>
              <h3 className={classes.subtitle}>
                Thank you.
              </h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
