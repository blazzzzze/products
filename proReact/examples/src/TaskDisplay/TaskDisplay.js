import React from 'react';

const TaskDisplay = (props) => {
    return (
        <div>
            {
                props.tasks.map(item =>
                    <div key={item.id}>{item.name}
                        <button onClick={() => props.onDelete(item.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    );
}

export default TaskDisplay;