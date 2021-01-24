import React from 'react';
import ComponentBuilder from './ComponentBuilder';

const ChildrenComponent = ({ children }) => {
    return children ? Object.keys(children).map(key =>
        <ComponentBuilder component={children[key]} id={key} />
    ) : ''
}

export default ChildrenComponent;