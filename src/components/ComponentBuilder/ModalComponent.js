import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ChildrenComponent from './ChildrenComponent';

const ModalComponent = ({ isOpen, width, height, children, id, appState, dispatch }) => {

    useEffect(() => {
        updateModalState(isOpen);
    }, [])

    const updateModalState = (state) => {
        dispatch({
            payload: {
                [id]: state
            },
            type: ''
        })
    }

    return <div style={{ display: appState[id] ? 'block' : 'none' }} id={id} className='modal-component modal'>
        <div style={{ width, height }} className="modal-content">
            <span>Trigger Id: {appState[`${id}Trigger`] || 'Self'}</span>
            <span className="close" onClick={() => updateModalState(false)}>&times;</span>
            {children ? <ChildrenComponent children={children} /> : ''}
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        appState: state
    };
};

export default connect(mapStateToProps)(ModalComponent);