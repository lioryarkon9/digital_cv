import React from 'react';
import RaimenApp from '../../views/RaimenWarsApp/App';
import {nextStep} from '../../actions/RaimenWars';
import {connect} from 'react-redux';


const MapStateToProps = state => {
    return {
        appView: state.MainReducer.appView
    }
}


const MapDispatchToProps = dispatch => {
    return {
        nextStep: () => dispatch(nextStep())
    }
}

const RaimenAppContainer = props => {
    return (
        <RaimenApp
            nextStep={props.nextStep}
            appView={props.appView}
        />
    );
}


export default connect(MapStateToProps, MapDispatchToProps)(RaimenAppContainer);