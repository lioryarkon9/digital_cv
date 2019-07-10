import React from 'react';
import RaimenApp from '../../views/RaimenWarsApp/App';
import {nextStep} from '../../actions/RaimenWars';
import {connect} from 'react-redux';


const MapDispatchToProps = dispatch => {
    return {
        nextStep: () => dispatch(nextStep())
    }
}

const RaimenAppContainer = props => {
    return (
        <RaimenApp
            nextStep={props.nextStep}
        />
    );
}


export default connect(null, MapDispatchToProps)(RaimenAppContainer);