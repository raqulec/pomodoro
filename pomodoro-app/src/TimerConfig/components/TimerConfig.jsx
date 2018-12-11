import React from 'react';
import * as timerStates from '../../timerStates';

class TimerConfig extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  handleChange(ev) {
    const newBaseTime = this.props.baseTime;
    if (ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hour'), 'hours').add(parseInt(ev.target.value), 'hours');
    if (ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minute'), 'minutes').add(parseInt(ev.target.value), 'minutes');
    if (ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('second'), 'seconds').add(parseInt(ev.target.value), 'seconds');

    this.props.setBaseTime(newBaseTime);
  }

  getInput() {
    if (this.props.timerState === timerStates.RUNNING) {
      return (
        <div>
          <div className="form-group row">
            <label for="hours" className="col-sm-2 col-form-label">Hours</label>
            <div className="col-sm-10">
              <input type="number" min="0" max="23" className="form-control" id="hours" onChange={this.handleChange} disabled />
            </div>
          </div>
          <div className="form-group row">
            <label for="minutes" className="col-sm-2 col-form-label">Minutes</label>
            <div className="col-sm-10">
              <input type="number" min="0" max="60" className="form-control" id="minutes" onChange={this.handleChange} disabled />
            </div>
          </div>
          <div className="form-group row">
            <label for="seconds" className="col-sm-2 col-form-label">Seconds</label>
            <div className="col-sm-10">
              <input type="number" min="0" max="60" className="form-control" id="seconds" onChange={this.handleChange} disabled />
            </div>
          </div>
        </div>);
    }
    else {
      return (
        <div>
          <div className="form-group row">
            <label for="hours" className="col-sm-2 col-form-label">Hours</label>
            <div className="col-sm-10">
              <input type="number" min="0" max="23" className="form-control" id="hours" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label for="minutes" className="col-sm-2 col-form-label">Minutes</label>
            <div className="col-sm-10">
              <input type="number" min="0" max="60" className="form-control" id="minutes" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label for="seconds" className="col-sm-2 col-form-label">Seconds</label>
            <div className="col-sm-10">
              <input type="number" min="0" max="60" className="form-control" id="seconds" onChange={this.handleChange} />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <form>
        <h1 className="text-primary">Set Timer</h1>
        {this.getInput()}
      </form>
    );
  }
}

export default TimerConfig;