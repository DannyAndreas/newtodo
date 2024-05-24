import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    const { toDo } = this.props;
    return (
      <div className="todo-count">
        <span className="todo-count">{toDo} items left</span>
      </div>
    );
  }
}
export default Footer;
