import React, { useState } from 'react';
import ChildrenComponent from './ChildrenComponent';

const ModalComponent = ({ isOpen, width, height, children, id }) => {
    const [modalOpenState, setModalOpenState] = useState(isOpen);

    return <div style={{ display: modalOpenState ? 'block' : 'none' }} id={id} className='modal-component modal'>
        <div style={{ width, height }} class="modal-content">
            <span class="close" onClick={() => setModalOpenState(false)}>&times;</span>
            {children ? <ChildrenComponent children={children} /> : ''}
        </div>
    </div>
}

export default ModalComponent;