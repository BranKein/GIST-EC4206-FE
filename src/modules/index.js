import loadingReducer from "./loading";
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ loadingReducer });

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;