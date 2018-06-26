import React, { Component } from 'react';

class Task extends Component {

    render() {
        return (
            <li style={{ backgroundColor: this.props.todo.done ? '#eee' : 'inherit' }}>
                <div className="todo-item">
                    <span className="item-name" onClick={() => this.props.handleToggle(this.props.index)} style={{ color: this.props.todo.done ? '#00aced' : '#555' }}>
                        {this.props.todo.value}
                    </span>
                    <span className="item-delete" onClick={(e) => this.props.handleDelete(this.props.index)}> x </span>
                </div>
            </li>
        );
    }
}

export default Task;


