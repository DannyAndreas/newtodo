import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    min: '',
    sec: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onMinChange = (e) => {
    this.setState({
      min: e.target.value,
    });
  };

  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label, min, sec } = this.state;
    const totalSeconds = parseInt(min) * 60 + parseInt(sec);
    this.props.onItemAdded(label, totalSeconds);
    this.setState({
      label: '',
      min: '',
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
