//import { configureStore } from '@reduxjs/toolkit';
import { createStore } from "redux";
import reducer from "../reducers/reducerFirst";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

export default store;



//import counterReducer from '../features/counter/counterSlice';

// export default configureStore({
//   reducer: {
//     //counter: counterReducer,
//   },
// });





