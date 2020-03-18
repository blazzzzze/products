import React, { Component } from 'react';

class TaskCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            completed: false
        };
    }

    onChange = (e) => {
        console.log(e.target);
        const name = e.target.name;
        const value = (name === "name") ? e.target.value : e.target.checked;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                    <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    <input type="checkbox" name="completed" value={this.state.completed} onChange={this.onChange} />

                <button onClick={() => this.props.onCreate({ name: this.state.name, completed: this.state.completed })}>Create</button>              
            </div>
        );
    }
}

export default TaskCreate;