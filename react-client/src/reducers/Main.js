import {DESKTOP, MOBILE, MAX_MOBILE_VIEW} from  '../consts';
import {SET_APP_VIEW} from '../consts/actionNames';

const InitState = {
    appView: MOBILE
}


const MainReducer = function (state = InitState, action) {
    let prevState;
    switch (action.type) {
        case SET_APP_VIEW:
            prevState = Object.assign({}, state);
            if (window.innerWidth > MAX_MOBILE_VIEW) {
                prevState.appView = DESKTOP;
            }

            return prevState;
        default:
            return state;
    }
}

export default MainReducer;