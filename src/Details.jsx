import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Nav from './Component/Nav'
import img from './assets/logo.png'
import Footer from './Component/Footer'

export default function Details() {
   const params= useParams().id
   const navigat=useNavigate()

   const [count,setcount]=React.useState()
   const [data,setdata]=useState({})
   const [user,setuser]=useState({})
const id=localStorage.getItem('id')
    React.useEffect(() => {
        get()
        axios.get(`https://fakestoreapi.com/products/${params}`).then(res=>{
            setdata(res.data)
           
            console.log(res.data.cart);
        })
            }, [])
const get=()=>{
    axios.get(`https://665737379f970b3b36c86978.mockapi.io/quis/${id}`).then(res=>{
      
      setuser(res.data)
      
        res.data.cart!==undefined&&setcount(res.data.cart.length)
        console.log(res.data.cart);
  
  
  
    })
}

const addCart=()=>{

let array=[]
console.log(user.cart);
// console.log(index);
if(user.cart!==undefined)
{
let index=user.cart.findIndex(r=>r.item.id==data.id)

// console.log(index);
if(index!==-1)
{
    array=user.cart
   

    array[index]={'item':data,'qut':++array[index].qut}

}else{
    array=user.cart
    // console.log(array);

    array.push({'item':data,'qut':1})


    // console.log(array);
}
   
}
else{
    array.push({'item':data,'qut':1})
}   axios.put(`https://665737379f970b3b36c86978.mockapi.io/quis/${id}`,{
    cart:array
   }).then(_=>{
    get()
   })
}

  return (
    <div>
          <div className='bg-[#131921] flex items-center navbar'>
        <Link className='navbar-start' to={'/'}><img  className='w-28 ' src={img} alt="" />
        </Link>


<div className='navbar-end'>
    {localStorage.getItem('id')==undefined?
   <span className='text-white'>signUp</span> 
    : <span className='text-white flex items-center gap-3 text-xl'>{localStorage.getItem('name')} 
    

<button  onClick={()=>{
    navigat('/cart')
}} className='btn btn-secondary'>
    
<span className='text-xl'>
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
<br />
{data!==undefined&&
<div className='px-8 flex max-sm:flex-col max-sm:px-1  m-auto w-[80vw]'>
    <img className=' h-96' src={data.image} alt="" />
    <div className='flex flex-col mx-9'>
<span className='font-bold text-3xl'>{data.title}</span> 
<h2 className='font-bold'>
    {/* {data.rating.rate!==undefined&&
   data.rating.rate } */}
ratings</h2>


<hr className=' border-gray-500' />


<span className='font-bold text-xl mt-8'>${data.price}</span>
<div>
    <h2 className='font-bold'>About this item</h2>
    <p className='w-96 max-sm:w-full'>{data.description}</p>

</div>

<button onClick={addCart} className='btn bg-[#ffd814]'>Add to Cart</button>
<button onClick={()=>{
    navigat('/cart')
}} className='btn bg-[#ffa41c] mt-2'>Buy Now</button>
    </div>
</div>
}
<br />
<Footer/>
    </div>
  )
}
