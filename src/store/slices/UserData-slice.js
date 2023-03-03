import { createSlice } from "@reduxjs/toolkit";

const initialState={
   users:[]
}

const UserDataSlice=createSlice({ 
    name:'UserData',
    initialState:initialState,
    reducers:{
       setUserData(state,action){
           state.users=action.payload
       }
    }
})

export default UserDataSlice
export const UserDataActions=UserDataSlice.actions
