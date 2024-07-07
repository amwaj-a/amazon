import React, { useState } from 'react'
import Nav from './Component/Nav'
import axios from 'axios'
import Footer from './Component/Footer'

export default function Cart() {
    const [cont,setconut]=useState(1)
    const [total,settotal]=useState()
    const [isLoading,setisLoading]=useState(true)
    let array=[]
const [user,setUser]=useState({})

    React.useEffect(() => {
        axios.get(`https://665737379f970b3b36c86978.mockapi.io/quis/${localStorage.getItem('id')}`).then(res=>{
            setUser(res.data)
            setisLoading(false)
            // console.log(user.cart[0].item.id)
          })
   
    }, [])
   
    const get=()=>{
        let a=[]
        axios.get(`https://665737379f970b3b36c86978.mockapi.io/quis/${localStorage.getItem('id')}`).then(res=>{
            setUser(res.data)
            setisLoading(false)
            user.cart.filter(i=>
                a.push(i.item.price*i.qut)
            
            )
            // sett(a);

          })
        //   console.log(a);
       
       
    }

const editQty=(e,item)=>{
    let array=[]
    array=user.cart
    let users=user.cart.find(r=>r.item.id==item)
    console.log(e.target.value);

    console.log(users.qut);
 if(users){

// array=users
users.qut=++e.target.value
// let a=['dddcfdcrc']
let index=array.findIndex(r=>r.item.id==item)

// console.log(array);
array[index]=users
console.log(array);
    axios.put(`https://665737379f970b3b36c86978.mockapi.io/quis/${localStorage.getItem('id')}`,{
        cart:array
    }).then(res=>{
        console.log(typeof array[index].item.price);
      settotal(array[index].item.price*array[index].qut)
        get()
    })
        

 }
    




    //   })  
}



  return (
    <div className='bg-[#eaeded]'>
        <Nav/>
<br />
<section className='flex p-6 bg-white flex-col justify-around w-[90%] m-auto'>
<button onClick={()=>{get()}}>reload</button>
    <h1 className='text-4xl p-8 '>

Shopping Cart

    </h1>
<hr className='border-gray-400' />
<br />
{isLoading?<><span className="loading loading-spinner loading-lg"></span>
    </>:
<>{user.cart!=undefined&&user.cart.map(item=>{
    return     ( 
    <div className='h-80 max-sm:h-max  flex max-sm:flex-col pb-9 border-b' >

<img className='h-full' src={item.item.image} alt="" />

<div className='flex flex-col justify-between text-xl mx-5'>
<h1 className='text-2xl'>{item.item.title}</h1>
<label for="cars">Qty: {item.qut}
    <br />
<select className='btn ' onChange={(e)=>{editQty(e,item.item.id)}} id="cars" name="cars">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select></label>
</div>


<div className='flex flex-col justify-between'>
<strong className='text-xl'>${item.item.price}</strong>
{/* {setconut(item.item)} */}
<strong>Subtotal ({item.qut} items): ${Number(item.item.price)*item.qut}
    {/* {settotal((e)=>{})} */}
</strong>
</div>


    </div>)}
    
)}
<h2 onClick={()=>{
        document.getElementById('my_modal_1').showModal()

}} className='btn-warning font-bold max-sm:w-full w-96 m-auto btn' >Buy{array}
  </h2>

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">shipping informatio</h3>
    <p className="py-4">address</p>
    <input className='input my-4 input-bordered' type="text" placeholder='country' />
   
   <br />
   <input className='input input-bordered' type="text" placeholder='city' />
<h1>  </h1>
   <h1>total : {}</h1>
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</>










}





</section>


<Footer/>

    </div>
  )
}
