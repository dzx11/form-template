import { withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.background,
      color: "white",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      marginTop: "4em",
    },
  }));
  

const MainPage = () => {
    const classes = useStyles();
    return (
        <>
            Main Page
        </>
    )
}
export default withStyles(useStyles)(MainPage);
