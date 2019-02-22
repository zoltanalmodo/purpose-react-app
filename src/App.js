import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Locations from './Components/Locations/Locations';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Landlords from './Components/Landlords/Landlords';
import Contact from './Components/Contact/Contact';
import Radio from './Components/Radio/Radio';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/Locations' component={Locations} />
          <Route exact path='/How-it-works' component={HowItWorks} />
          <Route exact path='/Landlords' component={Landlords} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Radio' component={Radio} />
        </div>
      </Router>
    )
  }
}

export default App;