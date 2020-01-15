import React, { Component } from 'react';

export class DeleteDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>{this.props.Title}</div>
                <button type="button" onClick={this.props.callbackYes}>ДА</button>
                <button type="button" onClick={this.props.callbackNo}>Нет</button>
            </div>
        );
    }
}
