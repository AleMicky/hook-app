import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/ProcesosPesado';
import '../useEffect/effects.css';

export const MemoHook = () => {

    const {counter, increment} = useCounter(2000);
    const [show, setShow]=useState(true); 

   
    const memoProcesoPesaodo = useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>
            <p>{memoProcesoPesaodo}</p>
            <button className="btn btn-primary"
                    onClick={() => increment(1)}>
                +1
            </button>

            <button className="btn btn-outline-primary ml-3"
                    onClick={
                        ()=>setShow(!show)
                    }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
