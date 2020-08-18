import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../Components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../Hooks/useFetch';
import { UseCounter } from '../../../Hooks/UseCounter';
jest.mock('../../../Hooks/useFetch');
jest.mock('../../../Hooks/UseCounter');

describe('Pruebas en MultipleCustomHooks', () => {

    UseCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });
    
    test('debe mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();

    });
    
    test('should debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Arturo',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Arturo');

    })
    
});
