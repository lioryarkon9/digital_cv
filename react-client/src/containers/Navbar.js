import React from 'react';
import {Col} from 'react-bootstrap';
import NavBar from '../views/Home/NavBar';
import {connect} from 'react-redux';
import {DESKTOP} from '../consts';


const MapStateToProps = state => {
    return {
        appView: state.MainReducer.appView
    }
}

const NavbarContainer = props => {
    if (props.appView === DESKTOP) {
        return (
            <Col xs={2}>
                <NavBar/>
            </Col>
        );
    } else return null
}

export default connect(MapStateToProps)(NavbarContainer);