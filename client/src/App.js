import React from 'react'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import pic from './components/images/p.jpg'
import useStyles from './styles'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
const App = () => {
    const classes= useStyles();

    return (
        <>
        <Container maxwidth="lg">
                <AppBar position="static" color="inherit" className={classes.appBar}>
                <Typography variant="h3" align="center" className={classes.heading}>Mern App</Typography> 
                <img src={pic} alt="alt" className={classes.image} height="60" width="60" align="right" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} s={7}>
                            <Posts/>
                            <Form/>
                        </Grid>
                        <Grid item xs={12} s={4}>
                            <Form/>
                            <Posts />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        
        </>
    )
}

export default App
