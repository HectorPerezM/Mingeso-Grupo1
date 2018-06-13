import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
    return(
        <div className="list">
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} className="list-show"><Link to="/Estudiante/Ejercicios" style={{color: 'white' ,textDecoration: 'none'}}>Ejercicios</Link></Grid>
                <Grid item xs={2}></Grid>

                <Grid item xs={2}></Grid>
                <Grid item xs={8} className="list-solved">Resueltos</Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
};

export default Home;