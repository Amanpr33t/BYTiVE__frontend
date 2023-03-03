import { createSlice } from "@reduxjs/toolkit";

const initialState={
   id:''
}

const UserIdSlice=createSlice({ 
    name:'UserId',
    initialState:initialState,
    reducers:{
       setUserId(state,action){
           state.id=action.payload
       }
    }
})

export default UserIdSlice
export const UserIdActions=UserIdSlice.actions