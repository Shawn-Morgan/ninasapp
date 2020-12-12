import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
// import { getPosts } from './actions/posts';
import useStyles from './styles';
//m
import ninasapp from './images/LaineyCoveredFace.jpg';

const App = () => {
  const classes = useStyles();
  
  return (
          <container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography className={classes.heading} variant="h2" align="center">NINASAPP</Typography>
              
              <img className={classes.image} src={} alt="" height="60" />
            </AppBar>
            <Grow in>
              <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} SM={7}>
                    <Posts />
                  </Grid>
                  <Grid item xs={12} SM={4}>
                    <Form />
                  </Grid>

                </Grid>

              </Container>
            </Grow>
          </container>
  )
}

// const App = () => {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();
//   const classes = useStyles();



export default App;
