import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AppWrapper from '../AppWrapper';
import {URL_COURSE_CART_VIEW} from '../../consts';
import GridViewContainer from '../../containers/RaimenWarsApp/Grid';
import GameInstructions from './views/GameInstructions';


class RaimenWarsApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            moreDetails: false
        }
        this.toggleGameInstructions = this.toggleGameInstructions.bind(this);
    }
    toggleGameInstructions () {
        switch (this.state.moreDetails) {
            case false:
                this.setState({moreDetails: true});
                break;
            case true:
                this.setState({moreDetails: false});
                break;
            default:
                return;
        }
    }
    render () {
        return (
            <AppWrapper
                prevAppUrl={URL_COURSE_CART_VIEW}
            >
                <GameInstructions
                    toggleGameInstructions={this.toggleGameInstructions}
                    moreDetails={this.state.moreDetails}
                />
                <div id='RaimenWarsApp'>
                    <Container>
                        <Row>
                            <Col>Action1</Col>
                            <Col>Action2</Col>
                        </Row>
                    </Container>
                    <GridViewContainer/>
                </div>
            </AppWrapper>
        );
    }
}

export default RaimenWarsApp