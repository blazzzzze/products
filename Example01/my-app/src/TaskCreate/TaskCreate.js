import React, { Component } from 'react';

class TaskCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {}
        };
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value ? event.target.value : event.target.checked;

    

        this.setState({
//            task: Object.assign({}, task, { [name]: value })
            
            task: { ...this.state.task, [name]: value }
        });
}

render() {
    return (
        <div>
                <div>Введите название: </div>
                <input type="text" name="title" onChange={this.onChangeHandler} />

                <div> Введите чекбокс: </div>
                <input type="checkbox" name="checked" onChange={this.onChangeHandler} />

            <button type="button" onClick={() => this.props.submitCallback(this.state.task)}>Сохранить</button>  
            <button type="button" onClick={this.props.cancelCallback}>cancelCallback</button>  
        </div>
    );
}
}

export default TaskCreate;
