import '@testing-library/jest-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../../Components/09-useContext/HomeScreen';
import { UserContext } from '../../../Components/09-useContext/UserContext';

describe('ruebas en <HomeScreen />', () => {

    const user = {
        name: 'Arturo',
        email: 'arturo@correo.com'
    };
    
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );
    
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    
});
