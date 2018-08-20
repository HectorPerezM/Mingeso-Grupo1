import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from '../Home/Home';
import Problem from '../Teacher/Problem';
import Exercises from '../Student/Exercises/Exercises';
import Exercise from '../Student/Exercises/Exercise/Exercise';
import StudentStats  from '../Student/Stats/StudentStats';
import Dashboard from '../Teacher/Dashboard/Dashboard';
import GraphTeacher from '../Teacher/GraphTeacher/GraphTeacher';
import FormProblem from '../Teacher/Problem/FormProblem';
import Problems from '../Teacher/Problem/Problems';
import FormSecciones from '../Coordinator/FormSecciones';
import EditProblem from '../Teacher/Problem/EditProblem';


const Content = () => {
    return(
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/exercises" exact component={Exercises} />
            <Route path="/exercises/:id" component={Exercise} />
            <Route path="/profile" component={StudentStats} />
            <Route path="/problem" component={Problem} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/estadisticas" component={GraphTeacher} />
            <Route path="/addProblem" component={FormProblem} />
            <Route path="/problems" component={Problems} />
            <Route path="/addSection" component={FormSecciones} />
            <Route path="/edit/:id" component={EditProblem} />
        </Switch>
    );
}

export default Content;
