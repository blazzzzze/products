import React, { Component } from 'react';
import { DeleteDialog } from './deleteDialog';
import CountDisplay from "./CountDisplay/index";
import store from "./store";
import { Provider } from "react-redux";
import TaskDisplay from "./TaskDisplay";
import TaskCreate from "./TaskCreate";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, title: "бутерброд с рыбой", checked: false },
                { id: 2, title: "бутерброд с курицей", checked: true },
                { id: 3, title: "бутерброд с грибами", checked: false }
            ],
            showForm: false,
            showDeleteDialog: false,
            counter: 0,
            showCreateTask: false
        };
    }

    changeCheckbox = (event, id) => {
        this.setState(
            {
                tasks: this.state.tasks.map(item => item.id === id ? { ...item, checked: event.target.checked } : item)
            }
        );
    }

    deleteItem = (id) => {
        this.setState(
            { tasks: this.state.tasks.filter(item => item.id !== id) }
        )
    }

    deleteItems = () => {

        let tempTasks = [];

        this.state.tasks.filter(item => item.checked != true).forEach(item => tempTasks.push(item));

        this.setState({
            tasks: tempTasks
        })
    }

    ShowCreateTask = () => {
        this.setState({ showCreateTask: true})
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <CountDisplay />
                    <button type="button" onClick={() => this.setState({ showForm: !this.state.showForm })}>
                        {(this.state.showForm) ? "Hide" : "Show"}
                    </button>
                    <button type="button" onClick={() => this.setState({ showDeleteDialog: true })}>Удалить выбранные элементы</button>
                    {this.state.showForm && <div>
                        {
                            this.state.tasks.map(item => <div key={item.id}>
                                <div> {item.title} </div> <input type="checkbox" checked={item.checked}
                                    onChange={(event) => this.changeCheckbox(event, item.id)} />
                                <button type="button" onClick={() => this.deleteItem(item.id)}>Удалить элемент</button>
                            </div>)
                        }
                    </div>
                    }

                    {this.state.showDeleteDialog && <DeleteDialog Title="" callbackNo={() => this.setState({ showDeleteDialog: false })}
                        callbackYes={() => {
                            this.setState({ showDeleteDialog: false });
                            this.deleteItems();
                        }
                        }
                    />}

                    <div style={{ backgroundColor: "red" }}>
                        <TaskDisplay />
                    </div>

                    <button type="button" onClick={this.ShowCreateTask} >ShowCreateTask</button>
                    {this.state.showCreateTask && <TaskCreate cancelCallback={() => this.setState({ showCreateTask : false})} />}
                </Provider>
            </div>

        );
    }
}

export default App;