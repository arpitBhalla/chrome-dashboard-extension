import * as React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: "Open Sans",
    },
  },
  palette: {
    type: "dark",
  },
});

ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
