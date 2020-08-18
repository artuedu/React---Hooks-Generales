import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { UseCounter } from '../../Hooks/UseCounter';

describe('Pruebas en useCounter', () => {
    
    test('debe retornar valores por defecto', () => {
        
        const {result} = renderHook( () => UseCounter());

        expect(result.current.state).toBe(10);
        expect( typeof result.current.increment).toBe('function');
        expect( typeof result.current.decrement).toBe('function');
        expect( typeof result.current.reset).toBe('function');

    });

    test('debe de tener el counter en 100', () => {
        
        const {result} = renderHook( () => UseCounter(100));

        expect(result.current.state).toBe(100);

    });

    test('debe de incrementar el counter en 1', () => {
        
        const {result} = renderHook( () => UseCounter(100) );
        const {increment} = result.current;

        act(() => {
            increment();
        });

        const {state: counter} = result.current;
        expect(counter).toBe(101);

    });

    test('debe de decrementar el counter en 1', () => {
        
        const {result} = renderHook( () => UseCounter(100) );
        const {decrement} = result.current;

        act(() => {
            decrement();
        });

        const {state: counter} = result.current;
        expect(counter).toBe(99);

    });

    test('debe de resetear el counter en 100', () => {
        
        const {result} = renderHook( () => UseCounter(100) );
        const {decrement, reset} = result.current;

        act(() => {
            decrement();
            reset();
        });

        const {state: counter} = result.current;
        expect(counter).toBe(100);

    });
        
});
