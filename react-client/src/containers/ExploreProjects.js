import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {MOBILE, URL_COURSE_CART_VIEW} from '../consts/consts';


const MapStateToProps = state => {
    return {
        appView: state.appView
    }
}


const ExploreProjectsContainer = props => {
    if (props.appView === MOBILE) {
        return (
            <Row className='margin-top-3'>
                <Col className='text-center'>
                    <Link to={URL_COURSE_CART_VIEW}>
                        Explore Projects
                    </Link>
                </Col>
            </Row>
        );
    } else return null;
}

export default connect(MapStateToProps)(ExploreProjectsContainer);