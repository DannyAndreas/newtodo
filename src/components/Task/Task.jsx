import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {
  render() {
    const { onDeleted, onToggleDone, label, id, done, date } = this.props;

    let classNames = 'description';
    if (done) {
      classNames += ' completed';
    }
    return (
      <li className={classNames}>
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
};

export default Task;
