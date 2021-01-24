import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = ({ text, id, dispatch, connectedModal }) => {

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

    return <button id={id} onClick={clickHandler} className='button-component'>{text}</button>
}

export default connect()(ButtonComponent);
