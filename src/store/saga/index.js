import { takeLatest } from "redux-saga/effects";
import { fetchDataFromDummyApiTypeName } from "../slice";
import axios from "axios";






export function* fetchDummyApiData(){
    yield takeLatest(fetchDataFromDummyApiTypeName, fetchDataFromDummyApi);
}


function* fetchDataFromDummyApi(){

    try {
        const response = yield axios.get('https://jsonplaceholder.typicode.com/posts');;
        console.log('======== response ============', response)
    } catch (error) {
        console.log('-------- fetchDataFromDummyApi error--------', error)
        
    }
}