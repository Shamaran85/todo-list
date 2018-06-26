import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div className="Form">
                <form id="add-todo" onSubmit={(e) => this.props.handleAdd(e)}>
                    <input className="inputText" onChange={(e) => this.props.handleInput(e)} value={this.props.inputValue} placeholder="Add Items and press enter..." />
                </form>
                <button className="clearBtn" onClick={(e) => this.props.handleClear(e)}>Clear Completed</button>
            </div>
        );
    }
}

export default Form;