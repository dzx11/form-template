import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import React from "react";
import './App.css';

import MainPage from "./pages/MainPage"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Helvetica Neue"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage></MainPage>
    </ThemeProvider>
  );
}

export default App;
