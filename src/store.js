import {createStore} from "redux";
import reducer from "./reducers/math";
import {composeWithDevTools} from "redux-devtools-extension";

const isDevMode = process.env.NODE_ENV === 'development';
const store = createStore(reducer, isDevMode ? composeWithDevTools() : undefined);

export default store;
