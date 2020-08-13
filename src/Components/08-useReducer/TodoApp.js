import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReduser';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () =>{
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        };

        dispatch(action);
    }

    const handleAdd = (newTodo) =>{

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);

    }

    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr/>

            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <TodoList 
                            todos={todos}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    </div>
                    <div className="col-5">
                        <TodoAdd
                            handleAdd={handleAdd}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
