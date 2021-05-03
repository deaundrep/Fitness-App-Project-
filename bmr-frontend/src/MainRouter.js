import React from 'react'
import { Switch, Route } from "react-router-dom";
import AuthContextComponent from "./components/context/AuthContext"

const Home = React.lazy(() => import("./components/Home/Home"));
const Profile = React.lazy(() => import("./components/Profile/Profile"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Signup = React.lazy(() => import("./components/Signup/Signup"));

function MainRouter() {
    return (

        <AuthContextComponent>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/" component={Home} />
            </Switch>
            </AuthContextComponent>

    );
}

export default MainRouter;