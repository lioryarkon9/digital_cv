import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// This view displays a SingleStep (the current one)

class GridView extends React.Component {
    componentDidMount () {
        this.props.randomizeCity();
    }
    render () {
        console.info(this.props);
        return (
            <Container>
                <Row>
                    {this.props.AllLocations.map(item => (
                        <Col>
                            item
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

GridView.defaultProps = {
    AllLocations: []
}

export default GridView;