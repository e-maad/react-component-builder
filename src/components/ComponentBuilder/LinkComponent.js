import React from 'react';
import { connect } from 'react-redux';

const LinkComponent = ({ text, url, id, connectedModal, dispatch }) => {
    
    const clickHandler = () => {
        if (connectedModal) {
            dispatch({
                payload: {
                    [connectedModal]: true,
                    [`${connectedModal}Trigger`]: id
                },
                type: ''
            })
        }
    }

    return <a id={id} href={url} onClick={clickHandler} target="_blank" className='link-component'>{text}</a>
}

export default connect()(LinkComponent);