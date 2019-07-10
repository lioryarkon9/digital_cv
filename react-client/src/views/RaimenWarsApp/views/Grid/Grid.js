import React from 'react';
import {NUM_ROWS, NUM_CELLS_IN_ROW} from '../../../../consts';
import SingleCell from '../../components/SingleCell';
import './Grid.css';

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
        console.info('this.props: ', this.props);
        console.info('getLocationsWrappedInRows: ', this.getLocationsWrappedInRows());
        return (
            <div className='RaimenGrid'>
                {this.getLocationsWrappedInRows().map((row, i) => (
                    <div key={'_row-' + i} className='d-flex justify-content-around margin-bot-1'>
                        {row.map(cell => (
                            <SingleCell
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