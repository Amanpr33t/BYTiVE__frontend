
import { UserDataActions } from "../store/slices/UserData-slice"
import { useDispatch } from "react-redux"
import { LoadingActions } from "../store/slices/Loading-slice"

const useFetchUsers=()=>{
  const dispatch= useDispatch()
  
  const fetchUsers=()=>{
    fetch('https://bytive-assignment-3.onrender.com/user/getUsers',{
      method:'GET'
  }).then((res)=>{
    
    return res.json()
  }).then(data=>{
    dispatch(UserDataActions.setUserData(data.users))
    dispatch(LoadingActions.setLoading(false))
  }).catch(error=>{
        console.log(error)
  })
  }
        
      return fetchUsers
}
export default useFetchUsers
