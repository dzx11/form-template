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

    // For use in passwordError
    // 0: field is empty
    // 1: field is valid
    // 2: field is < 12 characters
    // 3: field doesn't contain at least 2 upper case letters, 2 numbers, and 2 symbols
    const pwEmpty = 0, pwValid = 1, pwShort = 2, pwSimple = 3;

    const submit = (e) => {
        setDidSubmit(true);
    }

    const firstNameError = () => {
        return didSubmit && (!firstName || firstName.trim().length === 0);
    }

    const lastNameError = () => {
        return didSubmit && (!lastName || lastName.trim().length === 0);
    }

    const emailError = () => {
        // Credit https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        const reg = /^\S+@\S+$/;
        const isValid = reg.test(email)

        return didSubmit && !isValid;
    }

    const passwordError = () => {
        // Return 0: field is empty
        // Return 1: field is valid
        // Return 2: field is < 12 characters
        // Return 3: field doesn't contain at least 2 upper case letters, 2 numbers, and 2 symbols

        if (didSubmit) {
            if (password === "") {
                return pwEmpty;
            } else if (password.length < 12) {
                return pwShort;
            } else if (checkPasswordTooSimple(password)) {
                return pwSimple;
            } else {
                return pwValid;
            }
        } else {
            return pwValid; // don't show error if user didn't submit
        };

        function checkPasswordTooSimple(str) {
            // field doesn't contain at least 2 upper case letters, 2 numbers, and 2 symbols
            let upperCount = 0, numberCount = 0, symbolCount = 0;

            let symbolsList = ["'", ";", ":", "/", "?", ">", ".", "<", ",", "[", "{", "}", "]", "+", "=", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "~", "`", '"']

            upperCount = (str.match(/[A-Z]/g) || [] ).length; // Credit https://stackoverflow.com/questions/19171240/counting-upper-and-lower-case-characters-in-a-string

            for (let i = 0; i < str.length; i++) {
                let c = str[i];
                if (!isNaN(parseInt(c))) {
                    numberCount++;
                }
                else if (symbolsList.includes(c)) {
                    symbolCount++;
                }
            }
            
            if (upperCount < 2 || numberCount < 2 || symbolCount < 2) {
                return true;
            } else {
                return false;
            }
        }
    }

    const passwordHelperText = (errorCode) => {
        switch(errorCode) {
            case pwEmpty:
                return "Please enter password";
            case pwValid:
                return "";
            case pwShort:
                return "Password must be at least 12 characters long";
            case pwSimple:
                return "Password must contain at least 2 upper case letters, 2 numbers, and 2 symbols";
            default:
                return "Please enter password";
        }
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
                            label="First name"
                            variant="outlined"
                        />
                        <TextField
                            id="main-page-lastname"
                            error={lastNameError()}
                            helperText={lastNameError() ? "Please enter last name" : ""}
                            onChange={(event) => setLastName(event.target.value)}
                            label="Last name"
                            variant="outlined"
                        />
                        <TextField
                            id="main-page-email"
                            error={emailError()}
                            helperText={emailError() ? "Please enter email address" : ""}
                            onChange={(event) => setEmail(event.target.value)}
                            label="Email address"
                            variant="outlined"
                        />
                        <TextField
                            id="main-page-password"
                            error={passwordError() !== pwValid}
                            helperText={passwordHelperText(passwordError())}
                            onChange={(event) => setPassword(event.target.value)}
                            label="Password"
                            variant="outlined"
                            type="password"
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
