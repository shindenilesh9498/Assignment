import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Header from './components/Header';
import { Route,BrowserRouter,Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Details from './components/Details';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <Toolbar />
        <BrowserRouter>
          <Switch>
            <Route path="/details" component={Details} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
