import React, { useState } from 'react'
import { MultipleCustomHooks } from '../MultipleCustomHooks/MultipleCustomHooks';
import '../useEffect/effects.css';

export const RealRef = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real Ref</h1>
            <hr/>
            {show && <MultipleCustomHooks />}

            <button className="btn btn-primary mt-5"
                    onClick = {
                        () => setShow(!show)
                    }>
                Show/Hide
            </button>
        </div>
    )
}
