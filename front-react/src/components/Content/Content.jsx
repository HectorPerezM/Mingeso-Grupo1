import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from '../Home/Home';
import Problem from '../Teacher/Problem';

import './Content.css';

const Content = () => {
    return(
        <div className="content">
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/problem" component={Problem} />
            </Switch>
        </div>
    );
}

export default Content;