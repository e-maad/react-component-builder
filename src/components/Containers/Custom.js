import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import ComponentBuilder from '../ComponentBuilder/ComponentBuilder';

const Custom = (props) => {
    const [template, setTemplate] = useState();

    useEffect(() => {
        //removing param name
        setTemplate(JSON.parse(decodeURI(props.location.search.slice(3))))
    }, [])

    return template ? <ComponentBuilder component={template} id='main' /> : ''
}

export default withRouter(Custom);