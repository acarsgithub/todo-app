import React from 'react';

const TodoItem = (props) => {
   
    const {todo, index} = props;

    return (
        <li key={todo.title}>
            <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}></input>
            <span className={todo.done ? 'done' : ''}>{todo.title}</span>
            <button onClick={() => props.removeToDo(index)}>Remove</button>
        </li>
    );

};

export default TodoItem;
