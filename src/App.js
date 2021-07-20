import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
}from 'react-router-dom'
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import ContactUs from './Components/ContactUs/ContactUs'
import About from './Components/About/About'

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={ContactUs}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;