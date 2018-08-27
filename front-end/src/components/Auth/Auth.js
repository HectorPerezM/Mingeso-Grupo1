import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

class Auth extends Component{
    render(){
        return(
            <Router>
                <Route path="/" component={Login} />
                <PrivateRoute path="/Home" component={Dashboard} />
            </Router>
        );
    }
}

export default Auth;