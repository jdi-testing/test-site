import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
// import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";

// import { ThemeProvider as StyledThemeProvider } from "styled-components";
// import LightTheme from '../src/themes/light-theme';

export const parameters = { 
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => {

  // With Theme examples
  // return (
  //   <StylesProvider injectFirst>
  //     <CssBaseline />
  //     <StyledThemeProvider theme={LightTheme}>
  //         <MuiThemeProvider theme={LightTheme}>
  //         <Story/>
  //         </MuiThemeProvider>
  //       </StyledThemeProvider>
  //   </StylesProvider>
  // )

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Story/>
    </StylesProvider>
  )
 
}];




