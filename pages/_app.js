import React from 'react';
import Head from 'next/head';
import NavList from '../src/components/NavList'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div>
        <Grid container>
          <Grid xs={2} item>
            <NavList/>
          </Grid>
          <Grid item xs={10}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </div>
      
    </>
  );
}
