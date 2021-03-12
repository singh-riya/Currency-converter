import "./App.css";
import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Google from "./Components/Google";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='container'>
        <Route exact path='/'>
          <Redirect to='login' />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
