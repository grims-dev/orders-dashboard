import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const theme = {
  red: "#FF0000",
  brandMain: "#CB1E27",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1600px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const GlobalStyle = createGlobalStyle`
 
  html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    :root {
  --status-readytotry: #49D5B0;
  --status-ontheway: #66A8E9;
  --status-inthequeue: #FD6731;
  --status-outofstock: #FB0001;
}

    body {
        margin: 0;
  padding: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background-color: #222;
  color: #fefefe;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

const Layout = (props: any) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="App.css" />
      </Helmet>
      <GlobalStyle />
      {props.children}
    </>
  </ThemeProvider>
);

export default Layout;
