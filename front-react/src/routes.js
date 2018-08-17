import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Problem from './components/Teacher/Problem';

const IndexRoutes = () => {
    return(
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" component={Dashboard} />
        </Switch>
    );
};

export default IndexRoutes;