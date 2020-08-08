import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {

    const {counter , increment} = useCounter(1);
    const [boxSize, setBoxSize] = useState({})

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const pTap = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTap.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout</h1>
            <hr/>
                <blockquote className="blockquote text-right">
                    <p className="mb-0"
                        ref={pTap}>
                            {quote}
                    </p>
                </blockquote>
                <pre>
                    {
                        JSON.stringify(boxSize, null, 3)
                    }
                </pre>
                <button className="btn btn-primary"
                        onClick={() => increment(1)}>
                    Siguiente frase
                </button>
        </div>

    )
}
