import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import Task from '../Task/Task';
import './TaskList.css';

function TaskList({ todos, onDeleted, onToggleEdit, onToggleDone }) {
  const elements = todos.map((item) => {
    const { id, date, ...itemProps } = item;

    const now = formatDistanceToNow(date, {
      includeSeconds: true,
      addSuffix: true,
    });
    return (
      <div key={id}>
        <Task
          {...itemProps}
          key={id}
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

export default TaskList;
