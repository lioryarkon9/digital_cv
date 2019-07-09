import React from 'react';
import GridView from '../../views/RaimenWarsApp/views/Grid';
import {connect} from 'react-redux';
import {randomizeCity} from '../../actions/RaimenWars';

const MapStateToProps = state => {
    if (state.RaimenWarsReducer.AllSteps.head) {
        return {
            AllLocations: state.RaimenWarsReducer.AllSteps.head.AllLocations
        }
    } else {
        return {
            AllLocations: []
        }
    }
}

const MapDispatchToProps = dispatch => {
    return {
        randomizeCity: () => dispatch(randomizeCity())
    }
}

const GridContainer = props => {
    return (
        <GridView
            randomizeCity={props.randomizeCity}
            AllLocations={props.AllLocations}
        />
    );
}


export default connect(MapStateToProps, MapDispatchToProps)(GridContainer);