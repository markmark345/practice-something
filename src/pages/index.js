import Head from "next/head";
import Header from "../../components/Header/Header.js";
import Link from "next/link";
import Date from "../layouts/date";
import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

export default function Index({ allPostsData }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.containerFluid}>
        <GridContainer>
          <GridItem>
            <Navbar />
            <Home />
            <Footer />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
