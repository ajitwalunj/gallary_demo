import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import GallaryLayout from './Layout/Gallary/gallaryLayout';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/gallary-layout" component={GallaryLayout} />
          <Redirect from="/" to="/gallary-layout/home" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}