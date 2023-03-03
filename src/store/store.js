
import {  configureStore} from "@reduxjs/toolkit";
import LoadingSlice from "./slices/Loading-slice";
import UserDataSlice from "./slices/UserData-slice";
import ModalSlice from "./slices/Modal-slice";
import EditUserSlice from "./slices/EditUser-slice";
import UserIdSlice from "./slices/userId-slice";
const store= configureStore({
    reducer:{
     Loading:LoadingSlice.reducer,
     UserData:UserDataSlice.reducer,
     Modal:ModalSlice.reducer,
     EditUser:EditUserSlice.reducer,
     UserId:UserIdSlice.reducer
    }
})

export default store