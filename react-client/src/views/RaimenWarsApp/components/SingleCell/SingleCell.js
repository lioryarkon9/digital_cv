import React from 'react';
import './SingleCell.css';
import DINING_ICON from '../../../../assets/dining_icon.png';


const SingleCell = props => {
    const StoreExistClass = props.isStoreExist ? ' store-exists' : '';
    return (
        <div className='SingleCell'>
            <div 
                className={'img-frame'  + StoreExistClass}
                style={{backgroundColor: props.isStoreExist ? '#578a1d' : '#585555'}}
                onClick={e => props.toggleSingleCellStoreStatus(props.id)}
            >
                <img 
                    src={DINING_ICON} 
                    alt='img'
                />
            </div>
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