import { createAction, createSlice } from "@reduxjs/toolkit";




export const fetchDataFromDummyApiCreater = createAction('DUMMY/FETCH_DATA_FROM_API');
export const  fetchDataFromDummyApiTypeName = fetchDataFromDummyApiCreater().type;




export const initialStateProfile = {
    apiData: [],
    loader: false,
    apiListData: {},
    cartData: []
}

const dummyProfileSlice = createSlice({
    name: 'DUMMYPROFILE',
    initialState: initialStateProfile,
    reducers: {
        setDummyApiData: (state, action) => {
           return{
            ...state,
            apiData: action.payload
           }

        },
        setCartData: (state, action) => {
            // state.cartData.push(action.payload);
            return{
                ...state,
                cartData: [...state.cartData, action.payload] 
            }
        }
    }
})

export const {setDummyApiData, setCartData} = dummyProfileSlice.actions;
export const dummyProfileReducer = dummyProfileSlice.reducer;