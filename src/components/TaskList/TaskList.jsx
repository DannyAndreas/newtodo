import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import Task from '../Task/Task';
import './TaskList.css';

class TaskList extends React.Component {
  render() {
    const { todos, onDeleted, onToggleEdit, onToggleDone } = this.props;

    const elements = todos.map((item) => {
      const { id, date, isVisible, ...itemProps } = item;

      const now = formatDistanceToNow(date, {
        includeSeconds: true,
        addSuffix: true,
      });

      return (
        <div key={id} style={{ display: isVisible ? 'block' : 'none' }}>
          <Task
            key={id}
            {...itemProps}
            initialTime={item.initialTime}
            date={now}
            onDeleted={() => onDeleted(id)}
            onToggleEdit={() => onToggleEdit(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </div>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}

export default TaskList;
