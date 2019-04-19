import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

class App extends Component {
  render() {
    return (
    	<div id ="wallpaper">
		    <Header />
		    <Menu />
      	</div>
    );
  }
}

export default App;
