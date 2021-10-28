// import logo from './logo.svg';
import './App.css';
import React from "react";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Post from "./components/Post"
import Button from "@mui/material/Button";
// import * as Yup from 'yup';
// import axios from 'axios';
// import { baseurl } from './core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (


    
      


    <div className="App">
     <Router>
 
    <div>
<Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
     FORMS
        </Typography>
        <Button color="secondary"><Link to="/signup">Signup</Link></Button>
        <Button color="secondary"> <Link to="/Login">Login</Link></Button>
        <Button color="secondary"> <Link to="/">Logout</Link></Button>
        <Button color="secondary"> <Link to="/profile">Profile</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav> */}
      <Switch>
          <Route path="/Signup">
            < Signup/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Post">
            <Post />
          </Route>
          <Route exact path="/">
            <Dashboard />

          </Route>
        </Switch>
      </div>
    </Router>



    
    </div>
  );
}

export default App;
