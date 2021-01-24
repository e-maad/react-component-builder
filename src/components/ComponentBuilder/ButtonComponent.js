import React from 'react';

const ButtonComponent = ({ text, id }) => {
    return <button id={id} className='button-component'>{text}</button>
}

export default ButtonComponent;