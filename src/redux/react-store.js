import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import infoReducer from '../redux/info-reducer';
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    infoPage: infoReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
