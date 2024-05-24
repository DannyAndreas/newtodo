import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';
import TaskFilter from '../TaskFilter/TaskFilter';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [],
      filter: 'All',
    };
  }

  createTodoItem = (label) => ({
    cheacked: false,
    label,
    done: false,
    id: Math.floor(Math.random() * 1000),
    date: new Date(),
    filter: 'all', // active, all ,done
  });

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };
  toggleProprty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProprty(todoData, id, 'done'),
    }));
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onDeleteDone = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((item) => !item.done),
    }));
  };

  filter = () => {
    const { todoData, filter } = this.state;
    switch (filter) {
      case 'active':
        return todoData.filter((item) => !item.done);
      case 'done':
        return todoData.filter((item) => item.done);
      default:
        return todoData;
    }
  };

  render() {
    const { todoData, filter } = this.state;
    const visibleTodos = this.filter(todoData, filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todoapp">
        <NewTaskForm onItemAdded={this.addItem} />
        <TaskList todos={visibleTodos} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
        <div className="footer">
          <Footer toDo={todoCount} />
          <TaskFilter filter={filter} onFilterChange={this.onFilterChange} />
          <button type="button" onClick={this.onDeleteDone}>
            Clear Complited
          </button>
        </div>
      </div>
    );
  }
}
