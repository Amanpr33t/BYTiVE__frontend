
import { useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {  Modal, Form, Input,Divider } from 'antd';
import { ModalActions } from '../store/slices/Modal-slice';
import useFetchUsers from '../hooks/useFetchUsersHook';

const ModalComponent = () => {

  const fetchUsers=useFetchUsers()

  const webRef=useRef()
  const nameRef=useRef()
  const emailRef=useRef()
  const phoneRef=useRef()
  
  const dispatch=useDispatch()
  const isModal=useSelector(state=>state.Modal.isModal)
  const userInfo=useSelector(state=>state.EditUser.user)
  const userId=useSelector(state=>state.UserId.id)
  
  const [form] = Form.useForm();
  const {name,email,phone, website}=userInfo
  form.setFieldsValue({
    name:name,
  });
  form.setFieldsValue({
    email,
  });
  form.setFieldsValue({
    phone,
  });
  form.setFieldsValue({
    website,
  });

const handleOk = () => {
  dispatch(ModalActions.setModal(false))
  const updatedUserData={
    userId,
    name:nameRef.current.input.value,
    email:emailRef.current.input.value,
    phone:phoneRef.current.input.value,
    website:webRef.current.input.value,
  }
  
  fetch('https://bytive-assignment-3.onrender.com/user/editUser',{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
       },
      body:JSON.stringify(updatedUserData)
  }).then((res)=>{
      return res.json()
  }).then(data=>{
      if(data.status==='ok'){
       fetchUsers()
    }
  }).catch(error=>{
        console.log(error)
  })
};

const handleCancel = () => {
  dispatch(ModalActions.setModal(false))
};


return (
  <>
    <Modal title="Basic Modal"  open={isModal} onOk={handleOk} onCancel={handleCancel} >
      
    <Form
  name="basic"
  form={form}
  labelCol={{
    span: 8,
  }}
  wrapperCol={{
    span: 16,
  }}
  style={{
    maxWidth: 600,
  }}
  initialValues={{
    remember: true,
  }}
  autoComplete="off"
>
  <Divider ></Divider>
  
  <Form.Item
    label='Name'
    name="name"
    rules={[
      {
        required: true,
        message: 'Please input your username!',
      },
    ]}
  >
    <Input   ref={nameRef}/>
  </Form.Item>
  
  <Form.Item
    label="Email"
    name="email"
    rules={[
      {
        required: true,
        message: 'Please input your email!',
      },
    ]}
  >
    <Input  ref={emailRef}/>
  </Form.Item>
  
  <Form.Item
    label="Phone"
    name="phone"
    rules={[
      {
        required: true,
        message: 'Please input your phone!',
      },
    ]}
  >
    <Input  ref={phoneRef}/>
  </Form.Item>

  <Form.Item
    label="Website"
    name="website"
    rules={[
      {
        required: true,
        message: 'Please input your website!'
      },
    ]}
  >
    <Input   ref={webRef}/>
  </Form.Item>
  <Divider ></Divider>
</Form>
</Modal>
  </>
);
};
export default ModalComponent;


