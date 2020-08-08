import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    const [valor, setValor] = useState(initialState);

    const handleInputChange = ({target}) => {

        setValor({
            ...valor,
            [target.name]: target.value
        });

    };

    return [ valor, handleInputChange ];
}
