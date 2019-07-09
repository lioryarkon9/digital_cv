import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AppWrapper from '../AppWrapper';
import {URL_COURSE_CART_VIEW} from '../../consts';


class RaimenWarsApp extends React.Component {
    render () {
        return (
            <AppWrapper
                prevAppUrl={URL_COURSE_CART_VIEW}
            >
                <div id='RaimenWarsApp'>
                    <Container>GridView</Container>
                    <Container>
                        <Row>
                            <Col>Action1</Col>
                            <Col>Action2</Col>
                        </Row>
                    </Container>
                </div>
            </AppWrapper>
        );
    }
}

export default RaimenWarsApp