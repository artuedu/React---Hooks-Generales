import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { UseCounter } from '../../Hooks/UseCounter';

import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {state: counter, increment} = UseCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>BrackingBad Quotes</h1>
            <hr/>

            {
                loading
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                : (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >Siguiente quote</button>

        </div>
    )
}
