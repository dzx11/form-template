import { withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import React, {useRef, useState} from "react";

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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAndConditions, setTermsAndConditions] = useState(false);

    const [didSubmit, setDidSubmit] = useState(false);

    const submit = (e) => {
        setDidSubmit(true);

    }

    const firstNameError = () => {
        return didSubmit && firstName===""
    }
    return (
        <>
            <div className={classes.root}>
                <Paper square>
                    <form className={classes.form} autoComplete="off">
                        <TextField
                        id="main-page-firstname"
                        error={firstNameError()}
                        helperText={firstNameError() ? "Please enter first name" : ""}
                        onChange={(event) => setFirstName(event.target.value)}
                        label="First Name"
                        variant="outlined"
                        />
                        <Button
                        variant="contained"
                        onClick={submit}
                        style={{
                            backgroundColor: "white",
                            width: "100vw",
                            maxWidth: "100px",
                            fontWeight: "bold",
                            borderRadius: "0",
                        }}
                        >
                        SIGN UP
                        </Button>
                    </form>
                </Paper>
            </div>
        </>
    )
}
export default withStyles(useStyles)(MainPage);
