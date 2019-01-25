import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Location from './Location';
import HowItWorks from './HowItWorks';
import Landlords from './Landlords';
import Contact from './Contact';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Location' component={Location} />
          <Route exact path='/How-it-works' component={HowItWorks} />
          <Route exact path='/Landlords' component={Landlords} />
          <Route exact path='/Contact' component={Contact} />
        </div>
      </Router>
    )
  }
}





export default App;
