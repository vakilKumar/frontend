import { createSelector } from "@reduxjs/toolkit";

const dummyApiList = state => state.dummyProfile.apiData
const cartDataList = state => state.dummyProfile.cartData


const dummyProfileApiListSelector = createSelector(
    [dummyApiList], (dummyApiList) => dummyApiList
)
const cartDataListSelector = createSelector(
    [cartDataList], (cartData) => cartData
)


export const dummyProfileSelector = {
    getDummyApiListData: () => dummyProfileApiListSelector,
    getCartData: () => cartDataListSelector
}