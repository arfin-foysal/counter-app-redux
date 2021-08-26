import { combineReducers } from "redux";
import Reducer from "./Counter/Reducer/Reducer";
import ReducerTwo from "./CounterTwo/ReducerTwo/ReducerTwo";
export const allreducer=combineReducers({
    Reducer,
    ReducerTwo
})