import React, { Component } from 'react';
import './../style.css';

const getId = () => {
  let newId = Date.now() + Math.ceil(Math.random() * 100);
  newId = JSON.stringify(newId);
  return newId;
};

function getDate() {
  const date = new Date(),
    month = date.getMonth() + 1,
    day = date.getDate();
  return `${month}월 ${day}일`;
}

class TodoForm extends Component {
  state = {
    id: '',
    content: '',
    date: getDate(),
  };

  handleChange = e => {
    this.setState({
      content: e.target.value,
      id: getId(),
    });
  };

  handleSubmit = e => {
    const { from, onCreate } = this.props;
    e.preventDefault();
    onCreate(this.state, from);
    this.setState({
      id: '',
      content: '',
    });
  };

  render() {
    return (
      <form className="todo-form__group field" onSubmit={this.handleSubmit}>
        <input
          type="input"
          className="todo-form__field"
          placeholder="할 일을 입력해주세요"
          name="content"
          id="name"
          required
          autoComplete="off"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <label htmlFor="name" className="todo-form__label">
          {this.state.date}, 할 일을 입력해주세요
        </label>
      </form>
    );
  }
}

export default TodoForm;
