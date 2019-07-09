import {NUM_ROWS, NUM_CELLS_IN_ROW} from '../../../consts';
import {handleGridItemId, getNeighborsCoordinatesByOwn} from '../utils';


const TOTAL_NUM_CELLS = NUM_CELLS_IN_ROW * NUM_ROWS;


export class SingleCell {
    constructor (isStoreExist = false, Coordinates = null, neighboursCoordinates = null) {
        this.isStoreExist = isStoreExist;
        this.Coordinates = Coordinates;
        this.neighboursCoordinates = neighboursCoordinates ? neighboursCoordinates : [];
        this.id = neighboursCoordinates ? JSON.stringify(neighboursCoordinates) : '';
    }
    openStore () {
        this.isStoreExist = true;
    }
    shutDownStore () {
        this.isStoreExist = false;
    }
}

export class SingleStep {
    constructor (AllLocations) {
        if (AllLocations) {
            this.AllLocations = AllLocations;
        } else {
            let rowId = 0, colId = 0;
            for (let i = 0; i < TOTAL_NUM_CELLS; i++) {
                const Cell = new SingleCell(false, {x: colId, y: rowId});
                colId = handleGridItemId(colId, NUM_CELLS_IN_ROW);
                rowId = handleGridItemId(rowId, NUM_ROWS);
                Cell.Coordinates = {x: colId, y: rowId};
                Cell.neighbours = getNeighborsCoordinatesByOwn(Cell.Coordinates, NUM_CELLS_IN_ROW, NUM_ROWS);
            }
        }
    }
}