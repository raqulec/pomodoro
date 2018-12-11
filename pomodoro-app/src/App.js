import React, { Component } from 'react';
import Timer from './Timer/components/Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video src="tomato.mp4" autoplay="true" loop="true">
          </video>
        </div>
        <div className="header-overlay"></div>
        <Timer />
      </header>


    );
  }
}

export default App;
