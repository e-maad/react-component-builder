import React from 'react';

const ListComponent = ({ li, id }) => {
    return <ul id={id} className='list-component'>
        {li ? li.map(item => <li key={item}>{item}</li>) : ''}
    </ul>
}

export default ListComponent;