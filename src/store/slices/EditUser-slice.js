import { createSlice } from "@reduxjs/toolkit";

const initialState={
   user:{}
}

const EditUserSlice=createSlice({ 
    name:'EditUser',
    initialState:initialState,
    reducers:{
       setEditUser(state,action){
           state.user=action.payload.user
       }
    }
})

export default EditUserSlice
export const EditUserActions=EditUserSlice.actions
