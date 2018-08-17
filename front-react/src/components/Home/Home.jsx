import React, { Component } from 'react';
import './Home.css';

class Home extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            userId: 1,
            typePerson: -1
        }
    }

    componentWillMount(){
        this.setState({typePerson: 0});
    }


    render(){
        if(this.state.typePerson === 0){ //alumno
            return(
                <div className="home">
                    <h1>home page alumno</h1>
                </div>
            );
        } else if(this.state.typePerson === 1){ //profesor
            return(
                <div className="home">
                    <h1>home page profe</h1>
                </div>
            );
        } else {
            return(
                <div className="home">
                    <h1>home page coordinador</h1>
                </div>
            );
        }
    }
}

export default Home;