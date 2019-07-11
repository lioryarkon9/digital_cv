import {PAUSED, NUM_CELLS_IN_ROW, NUM_ROWS} from '../consts';
import {
    RANDOMIZE_CITY, 
    CLEAR_CITY, 
    NEXT_STEP, 
    TOGGLE_SINGLE_CELL_STORE_STATUS
} from '../consts/actionNames';
import {SingleCell, SingleStep} from '../ReduxAppsLogic/RaimenWarsApp/Entities';
import {getCellNeighbours, getNumNeighboursWithRaimen, isMinOneStoreOpen} from '../ReduxAppsLogic/RaimenWarsApp/utils';

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
            const PrevStepLocations = prevStep.AllLocations;
            if (isMinOneStoreOpen(PrevStepLocations)) {
                const NextStep = new SingleStep();
                NextStep.AllLocations = PrevStepLocations.map((item, i, self) => {
                    const NextStepItem = new SingleCell(item.isStoreExist, item.Coordinates, item.neighbours);
                    const NumNeighboursWithRaimen = getNumNeighboursWithRaimen(item.neighbours, self);
                    const IsCellWithStore = item.isStoreExist;
                    if ((IsCellWithStore && NumNeighboursWithRaimen < 2) || (IsCellWithStore && NumNeighboursWithRaimen > 3)) {
                        NextStepItem.shutDownStore();
                    } else if ((IsCellWithStore && NumNeighboursWithRaimen === 2) || (IsCellWithStore && NumNeighboursWithRaimen === 3)) {
                        NextStepItem.openStore();
                    } else if (!IsCellWithStore && NumNeighboursWithRaimen === 3) {
                        NextStepItem.openStore();
                    }

                    return NextStepItem;
                })
                let tmp = prevStep;
                tmp.prev = NextStep;
                NextStep.next = tmp;
                prevStep = NextStep;
            } else {
                window.alert('cannot play without open stores');
            }

            return {
                ...state,
                AllSteps: {head: prevStep}
            }     
        case TOGGLE_SINGLE_CELL_STORE_STATUS:
            prevStep = state.AllSteps.head;
            const RequestedCell = prevStep.AllLocations.find(cell => cell.id === action.payload);
            if (RequestedCell.isStoreExist) {
                RequestedCell.shutDownStore();
            } else {
                RequestedCell.openStore();
            }
            const UpdatedGrid = Array.from(prevStep.AllLocations);
            prevStep.AllLocations = UpdatedGrid;

            return {
                ...state,
                AllSteps: {head: prevStep}
            }
        default:
            return state;
    }
}


export default RaimenWarsReducer;