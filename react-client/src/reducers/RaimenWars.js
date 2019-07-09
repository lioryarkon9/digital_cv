import {PAUSED, IN_PROGRESS} from '../consts';
import {RANDOMIZE_CITY} from '../consts/actionNames';

const InitState = {
    AllSteps: {head: null},
    gameStatus: PAUSED
}

export function RaimenWarsReducer (state = InitState, action) {
    switch (action.type) {
        case RANDOMIZE_CITY:
            
        default:
            return state;
    }
}


export default RaimenWarsReducer;