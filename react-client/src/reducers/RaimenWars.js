import {PAUSED, IN_PROGRESS, NUM_CELLS_IN_ROW, NUM_ROWS} from '../consts';
import {RANDOMIZE_CITY} from '../consts/actionNames';
import {SingleCell, SingleStep} from '../ReduxAppsLogic/RaimenWarsApp/Entities';
import {getCellNeighbours} from '../ReduxAppsLogic/RaimenWarsApp/utils';

const InitState = {
    AllSteps: {head: null},
    gameStatus: PAUSED,
}

export function RaimenWarsReducer (state = InitState, action) {
    switch (action.type) {
        case RANDOMIZE_CITY:
            let prevStep = state.AllSteps.head;
            const Grid = new SingleStep();
            for (let row = 0; row < NUM_ROWS; row++) {
                //row = 0
                for (let col = 0; col < NUM_CELLS_IN_ROW; col++) {
                    //row = 0, col = 0
                    const CellNeighbours = getCellNeighbours(col, row, NUM_CELLS_IN_ROW, NUM_ROWS);
                    const Cell = new SingleCell(false, {x: col, y: row}, CellNeighbours, true);
                    Grid.AllLocations.push(Cell);
                }
            }

            if (!prevStep) prevStep = Grid;// if it's the first step
            else { // else than add it to the linked list
                let tmp = prevStep;
                tmp.prev = Grid;
                Grid.next = tmp;
                prevStep = Grid;
            }

            return {
                ...state,
                AllSteps: {head: prevStep}
            }
            
        default:
            return state;
    }
}


export default RaimenWarsReducer;