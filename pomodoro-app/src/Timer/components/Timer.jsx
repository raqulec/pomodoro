import React from 'react';
import moment from 'moment';
import TimerHeader from '../../TimerHeader/components/TimerHeader';
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay';
import TimerButton from '../../TimerButton/components/TimerButton';
import TimerConfig from '../../TimerConfig/components/TimerConfig';
import * as timerStates from '../../timerStates';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      baseTime: moment.duration(25, 'minute'),
      currentTime: moment.duration(25, 'minute'),
      timerState: timerStates.NOT_SET,
      timer: null,
    }
    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
    this.completeTimer = this.completeTimer.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000),
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.STOPPED,
      timer: null,
    });
  }

  restartTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime),
    });
  }

  reduceTimer() {
    if (this.state.currentTime.get('hour') === 0 &&
      this.state.currentTime.get('minute') === 0 && this.state.currentTime.get('second') === 0) {
      this.completeTimer()
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime,
    });
  }

  completeTimer() {
    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null,
    });

    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="header-content">
            <div className="container-fluid">
              <TimerHeader />
              <TimerDisplay
                baseTime={this.state.baseTime}
                currentTime={this.state.currentTime} />
              <TimerButton
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                restartTimer={this.restartTimer}
                timerState={this.state.timerState} />
            </div>
            <TimerConfig
              baseTime={this.state.baseTime}
              setBaseTime={this.setBaseTime}
              timerState={this.state.timerState} />
          </div>
          <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.</p>
        </div>
      </div>
    );
  }
}

export default Timer;