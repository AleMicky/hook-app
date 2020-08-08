import React, { useEffect, useState } from 'react';
import './effects.css';
import Messager from './Messager';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const { name, email} = formState;

    useEffect ( () => {
       // console.log('hey');
    },[]);

    useEffect ( () => {
       // console.log('hey');
    },[formState]);

    useEffect ( () => {
       // console.log('hey');
    },[email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    };
    return (
        <>
            <h1>useEffect</h1>
            <hr/>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="boramm@outloook.es"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                { ( name === '123') && <Messager/>}
        </>
    )
}
