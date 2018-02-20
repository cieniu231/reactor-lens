import React from 'react';
import {Route, Router} from 'react-router';
import {CityPage} from "./components/City/CityPage";
import Home from "./Home";
import {CityList} from "./components/City/CityList";

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Home}>
            <Route path="/city/:id" component={CityPage}/>
            <Route path="/city" component={CityList}/>
            <Route path="*" component={() => <p>Page Not Found</p>}/>
        </Route>
    </Router>
);

export default Routes;