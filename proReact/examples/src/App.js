import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import TaskDisplay from "./TaskDisplay";
import TaskCreate from "./TaskCreate/TaskCreate";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateForm: false
        };    
    }

    showCreateTask = () => {
        this.setState({ showCreateForm: !this.state.showCreateForm });
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <TaskDisplay />
                    <button type="button" onClick={this.showCreateTask}>CreateTask</button>
                    {this.state.showCreateForm && <TaskCreate />}
                </div>
            </Provider>
        );
    }
}

export default App;