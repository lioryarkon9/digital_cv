import React from 'react';
import './AppWrapper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import LEFT_ARROW from '../../assets/left_icon.png';
import RIGHT_ARROW from '../../assets/right_icon.png';
import {Link} from 'react-router-dom';


const AppWrapper = props => {
    return (
        <div id='AppWrapper'>
            <div id='header' className='d-flex align-items-center'>
                <Container>
                    <Row>
                        <Col className='d-flex align-items-center justify-content-center'>
                            {props.prevAppUrl ? 
                                <Link
                                    to={props.prevAppUrl}
                                >
                                    <img
                                        src={LEFT_ARROW}
                                        alt='img'
                                        className='arrow'
                                    />
                                </Link>
                            : null}
                        </Col>

                        <Col className='text-center'>
                            <div id='name'>LIOR YARKON</div>
                            <div id='title'>Front-End Developer</div>
                        </Col>

                        <Col className='d-flex align-items-center justify-content-center'>
                            {props.nextAppUrl ? 
                                <Link
                                    to={props.nextAppUrl}
                                >
                                    <img
                                        src={RIGHT_ARROW}
                                        alt='img'
                                        className='arrow'
                                    />
                                </Link>
                            : null}
                        </Col>
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
    children: <div>temp view</div>,
    nextAppUrl: '',
    prevAppUrl: ''
}


export default AppWrapper;