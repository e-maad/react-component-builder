import React from 'react';

const Heading1Component = ({ text, id }) => {
    return <h1 id={id} className='heading1-component'>{text}</h1>
}

export default Heading1Component;