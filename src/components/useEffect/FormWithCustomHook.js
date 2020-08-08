import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    
    const [ valorForm, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    const { name, email, password} = valorForm;

    useEffect(() => {
        console.log('Email cambio');
    }, [email])
    
    const handlerSubmint  = e =>{
        e.preventDefault();

        console.log(valorForm);
    }

    return (
        <form onSubmit={handlerSubmint}>
            <h1>FormWithCustomHook</h1>
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
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="******"
                        value={password}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <button type='submit' className="btn btn-primary">Guardar</button>
        </form>
    )
}
