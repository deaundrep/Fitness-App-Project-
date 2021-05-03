import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { NavLink } from "react-router-dom";

import "./Navbar.css";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        High Performance Fitness 
            </Typography>
            <NavLink
                        to="/"
                        exact
                        className="nav-link"
                        activeClassName="active-nav-link"
                    >
                        <Button color="inherit">Home</Button>
                    </NavLink>

                    <NavLink
                        to="/profile"
                        exact
                        className="nav-link"
                        activeClassName="active-nav-link"
                    >
                        <Button color="inherit">Profile</Button>
                    </NavLink>


                    <NavLink
                        to="/login"
                        exact
                        className="nav-link"
                        activeClassName="active-nav-link"
                    >
                        <Button color="inherit">Login</Button>
                    </NavLink>

                    <NavLink
                        to="/sign-up"
                        exact
                        className="nav-link"
                        activeClassName="active-nav-link"
                    >
                        <Button color="inherit">Register</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;