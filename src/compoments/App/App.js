import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Slider from '../Slider/Slider';

class App extends Component {
  render() {
    return (
    	<div id ="wallpaper">
		    <Header />
		    <Menu />
		    <Slider />
      	</div>
    );
  }
}

export default App;
