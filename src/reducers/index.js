import {combineReducers} from "redux";
import math from './math';

const rootReducer = combineReducers({
    output: math,
})
export default rootReducer;
