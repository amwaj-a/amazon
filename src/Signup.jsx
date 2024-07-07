import React from 'react'
import img from './assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const [user, setuser] = React.useState({})
    const [spanError, setspanErrorPass] = React.useState('')
const navigat=useNavigate()

    const addUser=()=>{
        if(user.name==undefined||user.password==undefined||user.email==undefined)
        {
            setspanErrorPass('please enter all falid')
        }
        else if(user.password.length<6){
            setspanErrorPass('password sould be 6 characters')

        }
        
        
        else
        // console.log(user);
    {axios.post('https://665737379f970b3b36c86978.mockapi.io/quis',{
        'name':user.name,
        'email':user.email,
        'password':user.password
    }).then(res=>{
        localStorage.setItem('id',res.data.id)
        localStorage.setItem('name',res.data.name)
        navigat('/')

    })}

    }
  return (
    <div className='w-96 m-auto'>

<img className='w-40' src='https://i.pinimg.com/474x/bf/2a/da/bf2ada117ab1eae006e3724fe9226187.jpg' alt="" />
<div className='flex flex-col border border-black p-4 '>
    <h1 className='text-2xl font-bold'>Signup </h1>
    <label htmlFor="">Name</label>
    <input type="email" onChange={(e)=>{
        setuser({...user,'name':e.target.value})
      }} className='input input-bordered' placeholder='first name' />  
    
    <label htmlFor="">Email</label>
    <input type="email" onChange={(e)=>{
        setuser({...user,'email':e.target.value})
      }} className='input input-bordered' placeholder='example@sit.com' />  
      <label htmlFor="">password</label>
      <input type="password" onChange={(e)=>{
        setuser({...user,'password':e.target.value})
      }} className='input input-bordered'/> 
      <br /> 
      <span className='text-red-600'>      {spanError}
      </span>
      <button onClick={()=>{
        addUser()
      }} className='btn btn-warning'>continue</button>

      <br />
      <span>already have a acccount? <Link to={'/login'} className='text-info' > Login</Link></span>
</div>


    </div>
  )
}
