import React from 'react';

const CountDisplay = (props) => {
    return (
        <div>
            <button onClick={props.decCallback}>-</button>
            <input value={props.counter} />
            <button onClick={props.incCallback}>+</button>
        </div>
    );
}

export default CountDisplay;