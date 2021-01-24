import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import data from '../../config/data.json'
import ComponentBuilder from '../ComponentBuilder/ComponentBuilder';

const PreDefined = ({ match }) => {
    const [component, setComponent] = useState();

    useEffect(() => {
        setComponent(data[match.params.id])
    }, [])

    return component ? <ComponentBuilder component={component} id='main' /> : ''
}

export default withRouter(PreDefined);