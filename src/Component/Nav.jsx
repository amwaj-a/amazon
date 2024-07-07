import React from 'react'
import img from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Nav() {
    const navigat=useNavigate()
    const [count,setcount]=React.useState()
React.useEffect(() => {
    axios.get(`https://665737379f970b3b36c86978.mockapi.io/quis/${localStorage.getItem('id')}`).then(res=>{
        res.data.cart!==undefined&&setcount(res.data.cart.length)
    })
}, [])

  return (
    <div className='bg-[#131921] flex items-center navbar'>
        <Link className='navbar-start' to={'/'}><img  className='w-28 ' src={img} alt="" />
        </Link>

<div className='navbar-end'>
    {localStorage.getItem('id')==undefined?
   <span className='text-white'>signUp</span> 
    : <span className='text-white flex items-center gap-3 text-xl'>{localStorage.getItem('name')} 
    

<button className='btn btn-secondary'>
    
<span onClick={()=>{
    navigat('/cart')
}} className='text-xl'>
<ion-icon name="cart-outline"></ion-icon>
{count}
</span>
    </button>    <button onClick={()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('name')
        navigat('/login')
    }}>
    <ion-icon name="log-out-outline"></ion-icon>

    </button>
    
    
    
    
    </span> 
    }
</div>

    </div>
  )
}
