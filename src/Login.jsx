import React from 'react'
import img from './assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [user, setuser] = React.useState({})
    const [spanError, setspanError] = React.useState('')
    const navigat=useNavigate()
    
        const addUser=()=>{
             axios.get('https://665737379f970b3b36c86978.mockapi.io/quis').then(res=>{
                console.log(res.data[0].password);
if(res.data[0].email==user.email && res.data[0].password==user.password)
{ 
    localStorage.setItem('id',res.data[0].id)
        localStorage.setItem('name',res.data[0].name)
        navigat('/')}
else{
    setspanError('email or password uncorrect')
}


             })
            // console.log(user);
        // axios.post('https://665737379f970b3b36c86978.mockapi.io/quis',{
        //     'name':user.name,
        //     'email':user.email,
        //     'password':user.password
        // }).then(res=>{
        //     localStorage.getItem('id',res.data.id)
        //     localStorage.getItem('name',res.data.name)
        //     navigat('/')
    
        // })
    
        }
  return (
    <div className='w-96 m-auto'>

<img className='w-40' src='https://i.pinimg.com/474x/bf/2a/da/bf2ada117ab1eae006e3724fe9226187.jpg' alt="" />
<div className='flex flex-col border border-black p-4 '>
    <h1 className='text-2xl font-bold'>Login </h1>
    <label htmlFor="">Email</label>
    <input onChange={(e)=>{
        setuser({...user,'email':e.target.value})
      }} type="email" className='input input-bordered' placeholder='example@sit.com' />  
      <label htmlFor="">password</label>
      <input  onChange={(e)=>{
        setuser({...user,'password':e.target.value})
      }} type="password" className='input input-bordered'/> 
      <span className='text-red-700'>{spanError}</span>
      <br /> 
      <button onClick={addUser} className='btn btn-warning'>continue</button>

      <br />
      <span>don't have a acccount? <Link to={'/signup'} className='text-info' > SignUp</Link></span>
</div>


    </div>
  )
}
