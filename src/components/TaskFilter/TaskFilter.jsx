import React from 'react';
import './TaskFilter.css';

class TasksFilter extends React.Component {
  buttons = [
    { name: 'All', label: 'All' },
    { name: 'active', label: 'active' },
    { name: 'done', label: 'done' },
  ];

  render() {
    var { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button type="button" className={`btn ${clazz}`} key={name} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      );
    });
    return (
      <div className="filters">
        <li>{buttons}</li>
      </div>
    );
  }
}

export default TasksFilter;
