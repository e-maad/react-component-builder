import React from 'react';

const ParagraphComponent = ({ text, id }) => {
    return <p id={id} className='paragraph-component'>{text}</p>
}

export default ParagraphComponent;