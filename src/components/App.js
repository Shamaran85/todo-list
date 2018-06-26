import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  state = {
    inputValue: "",
    todos: [
      { value: "Clean", done: false },
      { value: "Eat", done: false },
      { value: "Shower", done: false },
      { value: "Run", done: false },
      { value: "Sleep", done: false }
    ]
  }

  // Handle Input Text
  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  // Add Item to List
  handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos, inputValue: '' });
  }

  // Toggle "done" true/false
  handleToggle = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  // Delete Item from List
  handleDelete = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
  }


  // Clear Completed Items
  handleClear = () => {
    let tmpTodos = [];
    this.state.todos.filter((item) => {
      if (!item.done) {
        return tmpTodos.push(item);
      } else {
        return null;
      }
    })
    this.setState({ todos: tmpTodos });
  }


  render() {
    return (
      <div id="todo-list">
        <h1 className="header-title">React Todo App</h1>
        <Form
          handleInput={this.handleInput}
          inputValue={this.state.inputValue}
          handleAdd={this.handleAdd}
          handleClear={this.handleClear}
        />
        <ul>
          <List
            handleToggle={this.handleToggle}
            handleDelete={this.handleDelete}
            todos={this.state.todos} />
        </ul>
      </div>
    );
  }
}

export default App;
