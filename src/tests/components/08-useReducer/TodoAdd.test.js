import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../Components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {
 
    const handleAdd = jest.fn();

    const wrapper = shallow(<TodoAdd
        handleAdd={handleAdd}
    />);
    
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    
    test('no debe de llamar handleAdd', () => {
       
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});

        expect(handleAdd).toHaveBeenCalledTimes(0);

    });
    
    test('debe de llamar la funcion handleAdd', () => {

        const value = 'Aprender React';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});

        expect(handleAdd).toHaveBeenCalledTimes(1);
        expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAdd).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
});
