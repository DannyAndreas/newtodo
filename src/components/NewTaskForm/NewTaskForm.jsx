import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    min: '',
    sec: '',
    actualMin: 0,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onMinChange = (event) => {
    const value = event.target.value;
    this.setState({
      min: value,
      actualMin: value === '' ? 0 : parseInt(value, 10),
    });
  };

  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label, actualMin, sec } = this.state;
    const totalSeconds = parseInt(actualMin) * 60 + parseInt(sec);
    this.props.onItemAdded(label, totalSeconds);
    this.setState({
      label: '',
      actualMin: '',
      sec: '',
    });
  };

  render() {
    return (
      <div>
        <form className="header" onSubmit={this.onSubmit}>
          <h1>Todos</h1>
          <label> Todo </label>
          <div className="timer-form">
            <input
              type="text"
              required={true}
              className="new-todo"
              onChange={this.onLabelChange}
              placeholder="What needs to be done?"
              value={this.state.label}
            />
            <input
              type="number"
              className="new-todo-form__timer"
              onChange={this.onMinChange}
              placeholder="Минут на задание..."
              value={this.state.min}
            />
            <input
              type="number"
              className="new-todo-form__timer"
              onChange={this.onSecChange}
              placeholder="Секунд на задание..."
              value={this.state.sec}
            />
            <button type="submit" style={{ display: 'none' }} />
          </div>
        </form>
      </div>
    );
  }
}
