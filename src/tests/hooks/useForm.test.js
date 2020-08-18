import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../Hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'arturo',
        email: 'arturo@gmail.com'
    };
    
    test('debe de regresar un formulario por defecto', () => {
        
        const {result} = renderHook( () => useForm(initialForm) );
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');

    });
    
    test('debe cambiar el valor del formulario', () => {
        
        const {result} = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange] = result.current;

        const target = {
            name: 'name',
            value: 'eduardo'
        };

        act(() => {
            handleInputChange({
                target
            });
        });

        const [values] = result.current;

        expect(values).toEqual({
            ...initialForm,
            name: 'eduardo',
        });

    });

    test('debe de reestablecer el formulario con reset', () => {
        
        const {result} = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset] = result.current;

        const target = {
            name: 'name',
            value: 'eduardo'
        };

        act(() => {
            handleInputChange({
                target
            });
            reset();
        });

        const [values] = result.current;

        expect(values).toEqual(initialForm);

    });
    
});
