import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: this.props.initialTime,
      timerOn: false,
    };
  }

  startTimer = () => {
    if (!this.state.timerOn) {
      this.timer = setInterval(() => {
        this.setState(({ remainingTime }) => {
          if (remainingTime > 0) {
            return { remainingTime: remainingTime - 1 };
          } else {
            clearInterval(this.timer);
            return { remainingTime: 0, timerOn: false };
          }
        });
      }, 1000);
      this.setState({ timerOn: true });
    }
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ remainingTime: this.props.initialTime });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { label, done, onDeleted, onToggleDone, id, date } = this.props;
    const { remainingTime } = this.state;

    let classNames = 'description';
    if (done) {
      classNames += ' completed';
    }
    const isTimeNumber = !isNaN(remainingTime);
    return (
      <li className={classNames}>
        {isTimeNumber && (
          <div className="new-todo">
            <span className="new-todo-form__timer" placeholder="Sec" autoFocus>
              Осталось {remainingTime} сек.
            </span>
            <button className="icon-play" onClick={this.startTimer}></button>
            <button className="icon-pause" onClick={this.stopTimer}></button>
            <button className="icon-reset" onClick={this.resetTimer}></button>
          </div>
        )}

        <div className="view">
          <input id={id} type="checkbox" className="toggle" checked={done} onChange={onToggleDone} />

          <label htmlFor={id}>
            <span className="description" onClick={onToggleDone}>
              {label}
            </span>
            <span className="created">{date}</span>
          </label>
          <button type="button" onClick={onToggleDone} className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  initialTime: PropTypes.number.isRequired,
};
