import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Project from './Project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Project" component={Project} />
    </Switch>
)

export default Main;