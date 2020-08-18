import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../Components/03-examples/MultipleCustomHooks';
import { RealExampleRef } from '../../../Components/04-useRef/RealExampleRef';

describe('Pruebas en useRef', () => {
    
    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });
    
    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });
    
});
