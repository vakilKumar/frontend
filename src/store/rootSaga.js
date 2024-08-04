import { all } from "redux-saga/effects";
import { fetchDummyApiData } from "./saga";

const rootSaga = function* () {
  yield all([
    fetchDummyApiData()
  ]);
};

export default rootSaga;