import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import NewTripForm from './NewTripForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/new' component={NewTripForm} />
      </Switch>
    </Router>
  );
}

export default App;
