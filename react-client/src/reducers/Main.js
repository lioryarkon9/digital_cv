import {DESKTOP, MOBILE, MAX_MOBILE_VIEW} from  '../consts';
import {SET_APP_VIEW} from '../consts/actionNames';
import {combineReducers} from 'redux';
import RaimenWarsReducer from './RaimenWars';

const InitState = {
    appView: MOBILE
}


const MainReducer = function (state = InitState, action) {
    switch (action.type) {
        case SET_APP_VIEW:
            return {
                ...state,
                appView: window.innerWidth > MAX_MOBILE_VIEW ? DESKTOP : MOBILE
            }
        default:
            return state;
    }
}

const AllReducers = combineReducers({
    MainReducer,
    RaimenWarsReducer
})

export default AllReducers;