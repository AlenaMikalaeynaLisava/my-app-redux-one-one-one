//import { configureStore } from '@reduxjs/toolkit';
import { createStore } from "redux";
import reducer from "../reducers/reducerFirst";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

export default store;








