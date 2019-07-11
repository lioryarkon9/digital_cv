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
                {this.props.appView === DESKTOP ? 
                    <GameInstructions
                        toggleGameInstructions={this.toggleGameInstructions}
                        moreDetails={this.state.moreDetails}
                    />
                : null}
                
                <div id='RaimenWarsApp'>
                    <Container>
                        <Row>
                            <Col>
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