
import { EditOutlined, HeartOutlined ,DeleteFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Col } from 'antd';
import 'antd/dist/reset.css';
import { useSelector , useDispatch} from 'react-redux';
import { ModalActions } from '../store/slices/Modal-slice';
import { EditUserActions } from '../store/slices/EditUser-slice';
import { UserIdActions } from '../store/slices/userId-slice';
import useFetchUsers from '../hooks/useFetchUsersHook';


const CardComponent=()=>{
  const  fetchUsers=useFetchUsers()
  const dispatch=useDispatch()
  const { Meta } = Card;
  const users=useSelector(state=>state.UserData.users)
  
  
  const deleteClick=(userId)=>{
    fetch('https://bytive-assignment-3.onrender.com/user/deleteUser',{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
       },
      body:JSON.stringify({userId})
  }).then((res)=>{
     return res.json()
  }).then(data=>{
     if(data.status==='ok'){
       fetchUsers()
       }
  }).catch(error=>{
      console.log(error)
  })
  }

    return(
      <>
    
    {users.length!==0 && users.map(user=>{
          return <Col xs={{ span: 24}} sm={{ span: 24 }}  md={{ span: 8 }}  xl={{ span: 6 }} key={user._id}>
          <Card style={{
              margin:'15px',
              height:'410.75px'
            }}
            cover={
              <img
                height='200px'
                alt=''
                src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`}
              />
            }
             actions={[
                <HeartOutlined key="heart" style={{color:'red',fontSize:'20px'}}  />,
               <EditOutlined key="edit" style={{fontSize:'20px'}} onClick={()=>{
                     dispatch(ModalActions.setModal(true))
                     dispatch(EditUserActions.setEditUser({user}))
                     dispatch(UserIdActions.setUserId(user._id))
               }}/>,
                <DeleteFilled style={{fontSize:'20px'}} onClick={()=>deleteClick(user._id)}/>
            ]}
            >
            <div style={{height:'114.75px'}}>
            <Meta
              title={user.name}
              style={{paddingBottom:'10px',paddingTop:'0px'}}
            />
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/5.x/icons/svg?icon=envelope" />}
              description={user.email}
              style={{paddingBottom:'4px'}}
            />
             <Meta
              avatar={<Avatar src="https://api.dicebear.com/5.x/icons/svg?icon=phone"  />}
              description={user.phone}
              style={{paddingBottom:'4px'}}
            />
             <Meta
              avatar={<Avatar src="https://api.dicebear.com/5.x/icons/svg?icon=globe"  />}
              description={user.website}
              style={{paddingBottom:'4px'}}
            />
            </div>
          </Card></Col>
    })}
    
    </>
    )
}
export default CardComponent