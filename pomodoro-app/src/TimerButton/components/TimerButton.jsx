import React from 'react';
import * as timerStates from '../../timerStates';
import $ from 'jquery';

class TimerButton extends React.Component {
  constructor() {
    super()
    this.state = {
      flashing: null,
    }
    this.getButton = this.getButton.bind(this);
    this.startFlashing = this.startFlashing.bind(this);
    this.stopFlashing = this.stopFlashing.bind(this);
    this.flashingTimer = this.flashingTimer.bind(this);
  }

  flashingTimer() {
    $("#timer").ready().fadeOut(1000, function () {
      $(this).fadeIn(1000);
    });
  }

  startFlashing() {
    this.setState({
      flashing: setInterval(this.flashingTimer, 1000),
    });
  }

  stopFlashing() {
    if (this.state.flashing) {
      clearInterval(this.state.flashing);
    }

    this.setState({
      flashing: null,
    });
  }

  getButton() {
    if (this.props.timerState === timerStates.RUNNING) {
      return (<button class="btn btn-danger mx-auto btn-lg" onClick={(event) => { this.props.stopTimer(); this.startFlashing(); }}>Stop</button>);
    }

    if (this.props.timerState === timerStates.NOT_SET || this.props.timerState === timerStates.STOPPED) {
      return (<button class="btn btn-success mx-auto btn-lg" onClick={(event) => { this.props.startTimer(); this.stopFlashing(); }}>Start</button>);
    }
  }

  render() {
    return (
      <div className="row text-center">
        <div className="btn-group">
          {this.getButton()}
          <button className="btn btn-success mx-auto btn-lg" onClick={(event) => { this.props.restartTimer(); this.stopFlashing(); }}>
            <i className="fa fa-refresh"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default TimerButton;