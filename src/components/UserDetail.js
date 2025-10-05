import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
const UserDetail = () => {
    const {id}=useParams();
    const [users,setUsers]=useState(null);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setUsers(data))
    },[id]);

      if (!users) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>User Details</h1>
       <p>Name: {users.name}</p>
        <p>Username: {users.username}</p>
         <p>Email: {users.email}</p>
           <p>Phone: {users.phone}</p>
             <p>Website: {users.website}</p>
         </div>
  )
}

export default UserDetail
