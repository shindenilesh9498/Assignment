import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Paper, Typography, Grid, makeStyles, Box, Container, Button } from '@material-ui/core';
import { fetchUsersById } from '../Services/ApiService';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
    },
    right: {
        float: "right"
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop:"40px"
    },
}));

export default function Details() {


    const classes = useStyles();
    let history = useHistory();
    let location = useLocation();
    const id = location.state === undefined ? 0 : location.state.id;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (id !== 0)
            fetchUserDataById(id);
    }, []);

    const fetchUserDataById = (id) => {
        fetchUsersById(id)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }
    debugger
    return (

        <Container maxWidth="md">
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                    User Details
                </Typography>

                <Grid container spacing={1}>
                    <Grid item sm={3} xs={12}>
                        <Box fontWeight={500} m={1}>
                            User Id
                    </Box>
                    </Grid>
                    <Grid item sm={9} xs={12}>
                        {data?.userId}
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Box fontWeight={500} m={1}>Title</Box>
                    </Grid>
                    <Grid item sm={9} xs={12}>
                        {data?.title}
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Box fontWeight={500} m={1}>TBody</Box>
                    </Grid>
                    <Grid item sm={9} xs={12}>
                        {data?.body}
                    </Grid>
                </Grid>
                <div className={classes.buttons}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => history.goBack()}
                    >
                        Go to Dashboard
                      </Button>
                </div>
            </Paper>
        </Container>
    )
}