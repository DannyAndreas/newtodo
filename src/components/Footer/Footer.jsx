import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    const { toDo } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{toDo} items left</span>
      </footer>
    );
  }
}
export default Footer;
