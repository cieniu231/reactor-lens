import React from 'react';
import {Route, Router} from 'react-router';
import {CityPage} from "./components/City/CityPage";
import Home from "./Home";
import {CityList} from "./components/City/CityList";
import {ActivityPage} from "./components/Activity/ActivityPage";
import {SingleActivity} from "./components/Activity/SingleActivity";

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Home}>
            <Route path="/city/:id" component={CityPage}/>
            <Route path="/city" component={CityList}/>
            <Route path="/activity" component={ActivityPage}/>
            <Route path="/activity/:id" component={SingleActivity}/>
        </Route>
        <Route path="*" component={() => <p>Page Not Found</p>}/>
    </Router>
);

export default Routes;