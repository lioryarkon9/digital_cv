import React from 'react';
import Root from '../Root';
import {connect} from 'react-redux';
import {setAppView} from '../actions/appSettings';

const MapDispatchToProps = dispatch => {
    return {
        setAppView: () => dispatch(setAppView())
    }
}


const RootContainer = props => {
    return (
        <Root
            setAppView={props.setAppView}
        />
    );
}

export default connect(null, MapDispatchToProps)(RootContainer);