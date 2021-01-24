import React from 'react';

const LinkComponent = ({ text, url, id }) => {
    return <a id={id} href={url} target="_blank" className='link-component'>{text}</a>
}

export default LinkComponent;