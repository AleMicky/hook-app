import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log('Me llamaron :(');
    
    return (
        <small>{ value}</small>
    )
});
