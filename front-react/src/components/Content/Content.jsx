import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from '../Home/Home';
import Problem from '../Teacher/Problem';
import Exercises from '../Student/Exercises/Exercises';
import Exercise from '../Student/Exercises/Exercise/Exercise';
import StudentStats  from '../Student/Stats/StudentStats';

const Content = () => {
    return(
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/exercises" exact component={Exercises} />
            <Route path="/exercises/:id" component={Exercise} />
            <Route path="/profile" component={StudentStats} />
            <Route path="/problem" component={Problem} />
        </Switch>
    );
}

export default Content;