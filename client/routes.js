import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
import {CityPage} from "./components/City/CityPage";
import Home from "./Home";


const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Home}>
            <Route path="/city/:id" component={CityPage}/>
        </Route>
        <Route path="*" component={() => <p>Page Not Found</p>}/>
    </Router>
);

export default Routes;