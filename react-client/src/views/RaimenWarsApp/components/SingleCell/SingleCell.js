import React from 'react';


const SingleCell = props => {
    return (
        <div className='SingleCell'>
            {props.isStoreExist ? '1' : '0'}
        </div>
    );
}

SingleCell.defaultProps = {
    Coordinates: null,
    id: '',
    neighbours: [],
    isStoreExist: false
}

export default SingleCell