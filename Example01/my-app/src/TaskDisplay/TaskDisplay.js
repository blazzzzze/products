import React, { Component } from 'react';

class TaskDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                {
                    this.props.tasks.map(item => <div key={item.id}>
                        <div> {item.title} </div> <input type="checkbox" checked={item.checked}
                            onChange={(event) => this.changeCheckbox(event, item.id)} />
                        <button type="button" onClick={() => this.props.deleteCallback(item.id)}>Удалить элемент</button>
                    </div>)
                }
            </div>
        );
    }
}

export default TaskDisplay;
