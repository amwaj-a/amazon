import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Component/Nav'
import img from './assets/logo.png'
import Footer from './Component/Footer'

export default function Home() {
    const [data, setdata] = React.useState([])
    const [filter, setfilter] = React.useState([])
    const [search, setsearch] = React.useState('')
    const [category, setcategory] = React.useState([])
    const navigat=useNavigate()
    const [count,setcount]=React.useState()
    React.useEffect(() => {
axios.get('https://fakestoreapi.com/products').then(res=>{
    setdata(res.data)
    setfilter(res.data)
    setcategory(res.data.category)
})
    }, [])
    
const searchItem=()=>{

const array=filter.filter(e=>{
    // console.log(e.price==search);
    if(search=='')
    {return e}
    else if(e.title.includes(search)){
        return e
    }
    else if(e.price==search){
        return e
    }
})


setdata(array)

}



  return (
    <div>
     <div className='bg-[#131921] flex items-center navbar'>
        <Link className='navbar-start' to={'/'}><img  className='w-28 ' src={img} alt="" />
        </Link>

<label className='input navbar-center px-0  overflow-hidden flex items-center' htmlFor="">
    <input className='px-3' type="text" name="" id="" onChange={(e)=>{
        setsearch(e.target.value)
    }} placeholder='search'/>
<button onClick={()=>{searchItem()}} className='bg-[#febd69] w-10 h-full'>
    <ion-icon name="search-outline"></ion-icon></button>
</label>
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






        <section className=' bg-top bg-cover  bg-[url(https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg)] h-60'>

        </section>
<div className='grid bg-[#45accb] grid-cols-5 max-md:grid-cols-2 '>
    {data.map(item=>(

        <div className='border bg-white text-center 
         flex flex-col items-center  m-2 '>

<img className='w-40 h-40 m-auto' src={item.image} alt="" />

<h1 className='text-lg  font-bold'>{item.title}</h1>
<div >
<span className='font-bold'>${item.price
}</span>

<Link className='btn mx-9 btn-warning' to={`details/${item.id}`} >View Details</Link>

<br />
</div>
<br />
        </div>
    ))}
   

</div>


<Footer/>

    </div>
  )
}
