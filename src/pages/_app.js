//import '/styles/global.css'
import React from "react";
import ReactDOM from "react-dom";
import Router from "next/router";
import Head from "next/head";
import App from "next/app";
import "styles/scss/nextjs-material-kit.scss?v=1.2.0";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  //return <Component {...pageProps} />

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Project CS360</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
