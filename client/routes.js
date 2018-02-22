import React from 'react';
import {Route, Router} from 'react-router';
import {CityPage} from "./components/City/CityPage";
import {SingleCity} from "./components/City/SingleCity";
import Home from "./Home";
import {LandingPage} from "./components/Landing/LandingPage";
import {ActivityPage} from "./components/Activity/ActivityPage";
import {SingleActivity} from "./components/Activity/SingleActivity";

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Home}>
            <Route path="/home" component={LandingPage}/>
            <Route path="/city" component={CityPage}/>
            <Route path="/city/:id" component={SingleCity}/>
            <Route path="/activity" component={ActivityPage}/>
            <Route path="/activity/:id" component={SingleActivity}/>
        </Route>
        <Route path="*" component={() => <p>Page Not Found</p>}/>
    </Router>
);


export default Routes;