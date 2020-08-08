import React, { useState, useCallback, useEffect } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../useEffect/effects.css';

export const CallBackHook = () => {
    const [count, setCount] = useState(10);

   const increment = useCallback(
        (num) => {
            setCount(c => c + num );
        },
        [setCount],
    );
    useEffect(()=>{

    },[increment])
    return (
        <div>
            <h1> CallBack Hook: {count} </h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
