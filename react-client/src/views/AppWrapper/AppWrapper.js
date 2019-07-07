import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {MOBILE} from '../../consts';


const AppWrapper = props => {
    return (
        <div id='AppWrapper'>
            <div id='header' className='d-flex align-items-center'>
                <Container>
                    <Row>
                        {props.appView === MOBILE ?
                            <Col className='d-flex align-items-center justify-content-center'>
                                <span>LI</span>
                            </Col>
                        : null}
                        <Col className='text-center'>
                            <div id='name'>LIOR YARKON</div>
                            <div id='title'>Front-End Developer</div>
                        </Col>
                        {props.appView === MOBILE ?
                            <Col className='d-flex align-items-center justify-content-center'>
                                <span>RI</span>
                            </Col>
                        : null}
                    </Row>
                </Container>
            </div>
            <div id='body'>
                {props.children}
            </div>
        </div>
    );
}

AppWrapper.defaultProps = {
    children: <div>temp view</div>
}

const MapStateToProps = state => {
    return {
        appView: state.appView
    }
}


export default connect(MapStateToProps)(AppWrapper);