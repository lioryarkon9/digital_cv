import {
    RANDOMIZE_CITY, 
    CLEAR_CITY, 
    NEXT_STEP, 
    TOGGLE_SINGLE_CELL_STORE_STATUS
} from '../consts/actionNames';


export function randomizeCity () {
    return {
        type: RANDOMIZE_CITY
    }
}

export function clearCity () {
    return {
        type: CLEAR_CITY
    }
}

export function nextStep () {
    return {
        type: NEXT_STEP
    }
}

export function toggleSingleCellStoreStatus (cellId) {
    return {
        type: TOGGLE_SINGLE_CELL_STORE_STATUS,
        payload: cellId
    }
}