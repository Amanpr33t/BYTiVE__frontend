
import {  Row } from 'antd';
import './App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetchUsers from './hooks/useFetchUsersHook';
import Loading from './components/Loading';
import ModalComponent from './components/ModalComponent';
import CardComponent from './components/CardComponent';

function App() {
  const  fetchUsers=useFetchUsers()
  
  useEffect(()=>{
      fetchUsers()
  },[fetchUsers])

  const isLoading=useSelector(state=>state.Loading.isLoading)
  return (
    <div className='app'>
       <ModalComponent />
      {isLoading && <Loading/>}
      <Row >
           {!isLoading &&  <CardComponent/>}
      </Row>
    </div>
  );
}

export default App;
