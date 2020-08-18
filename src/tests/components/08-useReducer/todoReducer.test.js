import '@testing-library/jest-dom';
import { todoReducer } from '../../../Components/08-useReducer/todoReduser';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);

    });

    test('debe de agregar un todo', () => {

        const addTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = {
            type: 'add',
            payload: addTodo
        }
        
        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, addTodo]);

    });
    
    test('debe de borrar un todo', () => {
       
        const action = {
            type: 'delete', 
            payload: 2
        };

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);

    });
    
    test('debe de hacer el toggle del todo', () => {

        const action = {
            type: 'toggle', 
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect(state[1].done).toBe(true);
        expect(state[0]).toEqual(demoTodos[0]);

    });
    
});
