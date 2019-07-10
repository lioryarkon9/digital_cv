import {RANDOMIZE_CITY, CLEAR_CITY, NEXT_STEP} from '../consts/actionNames';


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