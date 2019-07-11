import React from 'react';
import {NUM_ROWS, NUM_CELLS_IN_ROW} from '../../../../consts';
import SingleCellContainer from '../../../../containers/RaimenWarsApp/SingleCell';
import './Grid.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

// This view displays a SingleStep (the current one)

class GridView extends React.Component {
    componentDidMount () {
        this.props.randomizeCity();
    }
    getLocationsWrappedInRows () {
        if (this.props.AllLocations.length) {
            let res = [];
            let itemsInRow = 0, numRows = 0, totalItems = 0;
            for (let r = numRows; r < NUM_ROWS; r++) {
                //r = 0
                let singleRow = [];
                for (let c = itemsInRow; c < NUM_CELLS_IN_ROW; c++) {
                    //r = 0, c = 0
                    singleRow.push(this.props.AllLocations[totalItems]);
                    itemsInRow++;
                    totalItems++;
                }
                res.push(singleRow);
                numRows++;
                itemsInRow = 0;
            }

            return res;
        } else {
            return [];
        }
    }
    render () {
        return (
            <div className='RaimenGrid'>
                <Container>
                    <Row>
                        <Col xs={2}>
                            <Button 
                                variant="secondary" 
                                size='sm' 
                                onClick={this.props.clearCity}
                            >
                                Clear city
                            </Button>
                        </Col>
                        <Col xs={2}>
                            <Button 
                                variant="secondary" 
                                size='sm' 
                                onClick={this.props.randomizeCity}
                            >
                                Randomize city
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <br/>
                {this.getLocationsWrappedInRows().map((row, i) => (
                    <div key={'_row-' + i} className='d-flex justify-content-around margin-bot-1'>
                        {row.map(cell => (
                            <SingleCellContainer
                                key={'_cell-' + cell.id}
                                id={cell.id}
                                Coordinates={cell.Coordinates}
                                neighbours={cell.neighbours}
                                isStoreExist={cell.isStoreExist}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

GridView.defaultProps = {
    AllLocations: []
}

export default GridView;