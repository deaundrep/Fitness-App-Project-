import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"
import jwtDecode from "jwt-decode";

import {
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	Button,
	
	Grid,
} from "@material-ui/core";


import useEmailHooks from "../hooks/useEmailHooks";
import usePasswordHooks from "../hooks/usePasswordHooks";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: 350,
		},
	},
}));

function Login(props) {
    const classes = useStyles();

	
    const context = useContext(AuthContext)

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const [
		password,
		setPassword,
		inputPasswordError,
		errorPasswordMessage,
		//isPasswordOnBlur,
		handlePasswordOnBlur,
	] = usePasswordHooks();
    
    const [
		email,
		setEmail,
		inputEmailError,
		errorEmailMessage,
		isEmailOnBlur,
		handleEmailOnBlur,
	] = useEmailHooks();

	const handleOnSubmit = async (e) => {
		e.preventDefault();

			try {
            let result = await axios.post("http://localhost:3005/users/login", {
				email:email,
				password:password,
			});
			localStorage.setItem('jwtToken', result.data.jwtToken)
			let decodedJWToken = jwtDecode(result.data.jwtToken);
			console.log(decodedJWToken.email);
			context.dispatch({ type: "SUCCESSFUL-LOGIN", user: decodedJWToken.email });
				props.history.push('/')
            console.log(result)
        } catch(e) {
            console.log(e)
        };
	}
useEffect(() => {
    if (inputEmailError === false && inputPasswordError === false) {
        setIsButtonDisabled(false);
    } else {
        setIsButtonDisabled(true);
        return;
    }

    if (email.length == 0 || password.length == 0) {
        setIsButtonDisabled(true);
    } else {
        setIsButtonDisabled(false);
    }
}, [email, password]);


    return (
        <Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: "30vh" }}>
			<Grid item xs={12}>
				<form
					className={classes.root}
					autoComplete="on"
					onSubmit={handleOnSubmit}>
					<FormControl error={inputEmailError}>
						<InputLabel htmlFor="component-email">E-mail</InputLabel>
						<Input
							id="component-email"
							name="E-mail"
							value={email}
							onChange={(e) => setEmail(e)}
							onBlur={() => handleEmailOnBlur()}
						/>
						<FormHelperText id="component-error-text">
							{inputEmailError && errorEmailMessage}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={inputPasswordError}>
						<InputLabel htmlFor="component-password">Password</InputLabel>
						<Input
							type="password"
							id="component-password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e)}
							onBlur={() => handlePasswordOnBlur()}
						/>
						<FormHelperText id="component-error-text">
							{inputPasswordError && errorPasswordMessage}
						</FormHelperText>
					</FormControl>
					<br />
					<Button
						variant="contained"
						color="primary"
						type="submit"
						disabled={isButtonDisabled}>
						Submit
					</Button>
				</form>
			</Grid>
		</Grid>

    );
}


export default Login
