import React from 'react';
import SingleCell from '../../views/RaimenWarsApp/components/SingleCell';
import {connect} from 'react-redux';
import {toggleSingleCellStoreStatus} from '../../actions/RaimenWars';

const MapDispatchToProps = dispatch => {
    return {
        toggleSingleCellStoreStatus: cellId => dispatch(toggleSingleCellStoreStatus(cellId))
    }   
}

const SingleCellContainer = props => {
    return (
        <SingleCell
            toggleSingleCellStoreStatus={props.toggleSingleCellStoreStatus}
            id={props.id}
            Coordinates={props.Coordinates}
            neighbours={props.neighbours}
            isStoreExist={props.isStoreExist}
        />
    );
}

export default connect(null, MapDispatchToProps)(SingleCellContainer);