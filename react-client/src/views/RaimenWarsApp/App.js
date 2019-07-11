import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import AppWrapper from '../AppWrapper';
import {URL_COURSE_CART_VIEW, DESKTOP} from '../../consts';
import GridViewContainer from '../../containers/RaimenWarsApp/Grid';
import GameInstructions from './views/GameInstructions';


class RaimenWarsApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            GameInstructions: {
                isShow: true,
                moreDetails: false
            }
        }
        this.toggleGameInstructions = this.toggleGameInstructions.bind(this);
        this.toggleInstructionsDetails = this.toggleInstructionsDetails.bind(this);
    }
    toggleGameInstructions () {
        switch (this.state.GameInstructions.isShow) {
            case false:
                this.setState({GameInstructions: {moreDetails: false, isShow: true}});
                break;
            case true:
                this.setState({GameInstructions: {moreDetails: false, isShow: false}});
                break;
            default:
                return;
        }
    }
    toggleInstructionsDetails () {
        switch (this.state.GameInstructions.moreDetails) {
            case false:
                this.setState({GameInstructions: {moreDetails: true, isShow: true}});
                break;
            case true:
                this.setState({GameInstructions: {moreDetails: false, isShow: true}});
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
                {this.props.appView === DESKTOP && this.state.GameInstructions.isShow ? 
                    <GameInstructions
                        toggleInstructionsDetails={this.toggleInstructionsDetails}
                        moreDetails={this.state.GameInstructions.moreDetails}
                        toggleGameInstructions={this.toggleGameInstructions}
                    />
                : null}
                
                <div id='RaimenWarsApp'>
                    <Container>
                        <Row>
                            <Col xs={2}>
                                {this.props.appView === DESKTOP ?
                                    <Button
                                        onClick={e => this.toggleGameInstructions()}
                                    >
                                        {this.state.GameInstructions.isShow ? 'Hide ' : 'Show '}
                                        Instructions
                                    </Button>
                                : null}
                            </Col>
                            <Col xs={2}>
                                {this.props.appView === DESKTOP ?
                                    <Button
                                        onClick={e => this.props.nextStep()}
                                    >
                                        Next step
                                    </Button>
                                : null}
                            </Col>
                        </Row>
                    </Container>
                    <GridViewContainer/>
                </div>
            </AppWrapper>
        );
    }
}

export default RaimenWarsApp