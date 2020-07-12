import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import React, { createContext, lazy, Suspense, useState } from "react";
import logo from './logo.svg';
import Preloader from "./pages/common/Preloader";
import './App.css';

const MainPage = lazy(() => import("./pages/MainPage"));

const theme = createMuiTheme({
  background: "black",
  palette: {
    type: "dark",
    background: "black",
  },
  typography: {
    fontFamily: ["Helvetica Neue"].join(","),
  },
});

export const AppContext = createContext();


function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <ThemeProvider theme={theme}>
        <MainPage></MainPage>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
