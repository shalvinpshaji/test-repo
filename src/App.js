import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default App;
