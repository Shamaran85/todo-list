import React, { Component } from 'react';
import Task from './Task'

class List extends Component {

    render() {
        return (
            <div className="List">
                {this.props.todos.map((todo, index) => {
                    return (
                        <Task
                            key={index}
                            index={index}
                            handleToggle={this.props.handleToggle}
                            handleDelete={this.props.handleDelete}
                            todo={todo}
                        />
                    )
                })}
            </div>

        );
    }
}

export default List;