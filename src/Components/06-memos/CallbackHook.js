import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';
// import { useEffect } from 'react';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () =>{
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num);
        },
        [setCounter],
    );

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input]);

    return (
        <div>
            <h1>useCalbback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
