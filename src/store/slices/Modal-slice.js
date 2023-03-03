import { createSlice } from "@reduxjs/toolkit";

const initialState={
   isModal:false,
}

const ModalSlice=createSlice({ 
    name:'Modal',
    initialState:initialState,
    reducers:{
       setModal(state,action){
           state.isModal=action.payload
       }
    }
})

export default ModalSlice
export const ModalActions=ModalSlice.actions
