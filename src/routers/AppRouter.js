import React from 'react';
import {BrowserRouter,Switch,Route}from 'react-router-dom'
import Hom from '../pages/Hom';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Navigation from '../components/Navigation';
import PortfolIoitem from '../pages/PortfolioItem';

export default function AppRouter() {
    return(
        <BrowserRouter>
        <Navigation/>
        <Switch>
                <Route exact path='/' component={Hom}/>
                <Route path='/about' component={About}/>
                <Route exact path='/portfolio' component={Portfolio}/>
                <Route  path='/portfolio/:id' component={PortfolIoitem}/>
                <Route path='/contact' component={Contact}/>
                <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    );
}
