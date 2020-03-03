import React from 'react'
import App, { AppContext } from 'next/app'
import '../main-styles.css'

class MyApp extends App {
  // static async getInitialProps(appContext: AppContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext)

  //   return { ...appProps };
  // }

  render () {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />;
  }
}

export default MyApp
