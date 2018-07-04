import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from './Home.js';
import Navigation from './Navigation.js';
import About from './About.js';
import Design from './Design.js';
import Development from './Development.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <Navigation />
         <Route exact path='/' component={Home} />
         <Route exact path='/development' component={Development} />
         <Route exact path='/design' component={Design} />
         <Route exact path='/about' component={About} />
         <Footer />
      </div>
    );
  }
}

export default App;
