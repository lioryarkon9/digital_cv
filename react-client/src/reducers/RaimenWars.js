import {PAUSED, NUM_CELLS_IN_ROW, NUM_ROWS} from '../consts';
import {RANDOMIZE_CITY, CLEAR_CITY, NEXT_STEP} from '../consts/actionNames';
import {SingleCell, SingleStep} from '../ReduxAppsLogic/RaimenWarsApp/Entities';
import {getCellNeighbours, getNumNeighboursWithRaimen} from '../ReduxAppsLogic/RaimenWarsApp/utils';

const InitState = {
    AllSteps: {head: null},
    gameStatus: PAUSED,
}

export function RaimenWarsReducer (state = InitState, action) {
    let prevStep;
    switch (action.type) {
        case RANDOMIZE_CITY:
            prevStep = state.AllSteps.head;
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
        case CLEAR_CITY:
            prevStep = state.AllSteps.head;
            const ClearedLocations = prevStep.AllLocations.map(item => {
                item.shutDownStore();

                return item;
            });
            
            prevStep.AllLocations = ClearedLocations;

            return {
                ...state,
                AllSteps: {head: prevStep}
            }
        case NEXT_STEP:
            prevStep = state.AllSteps.head;
            const NextStep = Object.create(prevStep);
            NextStep.AllLocations = NextStep.AllLocations.map((singleCell, i, self) => {
                const NumNeighboursWithRaimen = getNumNeighboursWithRaimen(singleCell.neighbours, self);
                const IsCellWithStore = singleCell.isStoreExist;
                if ((IsCellWithStore && NumNeighboursWithRaimen < 2) || (IsCellWithStore && NumNeighboursWithRaimen > 3)) {
                    singleCell.shutDownStore();
                } else if ((IsCellWithStore && NumNeighboursWithRaimen === 2) || (IsCellWithStore && NumNeighboursWithRaimen === 3)) {
                    singleCell.openStore();
                } else if (!IsCellWithStore && NumNeighboursWithRaimen === 3) {
                    singleCell.openStore();
                }

                return singleCell;
            });

            debugger;
            let tmp = prevStep;
            tmp.prev = NextStep;
            NextStep.next = tmp;
            prevStep = NextStep;

            return {
                ...state,
                AllSteps: {head: prevStep}
            }            
        default:
            return state;
    }
}


export default RaimenWarsReducer;