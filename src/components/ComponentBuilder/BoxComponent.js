import React from 'react';
import ChildrenComponent from './ChildrenComponent';

const BoxComponent = ({ borderSize, children, id }) => {
    return <div id={id} className='box-component' style={{ borderWidth: borderSize }}>
        {children ? <ChildrenComponent children={children} /> : ''}
    </div>
}

export default BoxComponent;