import React from 'react';

const leftPad = (val) => {
  if (val < 10) return `0${val}`

  return `${val}`
}

class TimerDisplay extends React.Component {
  render() {
    return (<div className="row">
      <h2 id="timer" className="text-center">{`${leftPad(this.props.currentTime.get('hours'))}:${leftPad(this.props.currentTime.get('minutes'))}:${leftPad(this.props.currentTime.get('seconds'))}`}</h2>
    </div>);
  }
}

export default TimerDisplay;