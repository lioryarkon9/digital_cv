import React from 'react';
import GridView from '../../views/RaimenWarsApp/views/Grid';
import {connect} from 'react-redux';
import {randomizeCity} from '../../actions/RaimenWars';
import {DESKTOP} from '../../consts';
import {Container} from 'react-bootstrap';

const MapStateToProps = state => {
    if (state.RaimenWarsReducer.AllSteps.head) {
        return {
            AllLocations: state.RaimenWarsReducer.AllSteps.head.AllLocations,
            appView: state.MainReducer.appView
        }
    } else {
        return {
            AllLocations: [],
            appView: state.MainReducer.appView
        }
    }
}

const MapDispatchToProps = dispatch => {
    return {
        randomizeCity: () => dispatch(randomizeCity())
    }
}

const GridContainer = props => {
    if (props.appView !== DESKTOP) {
        return (
            <Container>
                Sorry, this app is available only for desktop screens. Please visit later.
            </Container>
        );
    } else {
        return (
            <GridView
                randomizeCity={props.randomizeCity}
                AllLocations={props.AllLocations}
            />
        );
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(GridContainer);