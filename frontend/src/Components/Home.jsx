import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './home.css'



function Home() {
  useEffect(()=>{
    
    document.title= "Home || SHIPSHIP";
})
  return (
    <>
    <Navbar/>
    <div className='text-white flex justify-center h-[70vh] '>
        <div className=' font-extrabold flex flex-col  justify-center items-center '>
        <h1 className='text-9xl text-amber-600 jersey-10-regular'>SHIPSHOP</h1>
        <h3 className='text-5xl font-light mb-3'>Your One-Stop Online Shopping Destination </h3>
        <p className=' w-[30vw] text-center font-light '>Discover a world of convenience at ShipShop, where your favorite products are just a click away. From fashion to electronics,<br></br> home essentials to unique finds,<br></br>shop ShipShop, <br></br> Shop smart !</p>

        <div className='flex flex-row '>
        <Link to="/shop"><button className='btn m-3 hover:bg-amber-600 hover:text-black text-white bg-slate-600 shadow-md'>Shop Now</button></Link>
        <Link to="http://localhost:5174/"target="_blank" ><button className='btn m-3 hover:bg-amber-600 hover:text-black text-white bg-slate-600 shadow-md'>Connect to Customer Care</button></Link>
        </div></div>
    </div>
   
    
    </>
  )
}

export default Home