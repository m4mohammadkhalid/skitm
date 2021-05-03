import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import About from './views/fronts/about/About';
import Contact from './views/fronts/contact/Contact';
import { HomePageComponent } from './views/fronts/HomeComponent';
import { Dashboard } from './views/backend';
import Student from './views/backend/component/Student';
import StudentDetails from './views/backend/component/StudentDetails';




export const Routes = () => {
  return (
    <>
     
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />



        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/studentdetails" component={StudentDetails} />

        

      </Switch>
     
    </>
  );
};