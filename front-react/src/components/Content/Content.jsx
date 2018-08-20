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
<<<<<<< HEAD
import EditProblem from '../Teacher/Problem/EditProblem';
=======
import FormSecciones from '../Coordinator/FormSecciones';
>>>>>>> 3a077d3c4ebdbc9be3ab98c03086dc8a05582bb9

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
<<<<<<< HEAD
            <Route path="/edit/:id" component={EditProblem} />
=======
            <Route path="/addSection" component={FormSecciones} />
>>>>>>> 3a077d3c4ebdbc9be3ab98c03086dc8a05582bb9
        </Switch>
    );
}

export default Content;
