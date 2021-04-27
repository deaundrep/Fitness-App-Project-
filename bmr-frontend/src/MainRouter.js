import React from 'react'
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));

function MainRouter() {
    return (
        <>
            <Navbar />
            <Switch>

            <Route path="/" component={Home}/>
            </Switch>
            
        </>
    )
}

export default MainRouter; 
