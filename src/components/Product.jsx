import React, { useState, useEffect} from 'react'
import { Outlet,Link } from 'react-router-dom'
import Button from "react-bootstrap/button"

const Product = () => {

    let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(0)
    
    useEffect(()=>{
        console.log("Everytime render")
    })

 useEffect(()=>{console.log("only at intial rendering bcz of empty dependency in the arguement. ")},[])

 useEffect(()=>{console.log("will render whenever this arguement array call or render")},[count1])
  return (
    <div>Product-{count}-{count1}<br></br>
        <Link to="productdetails">ProductDetails</Link><br/>
        <Link to="productlist">Productlist</Link>
        <Button variant="primary" onClick={()=>{setCount(count+1)}} >Increase</Button>
        <Button variant="primary" onClick={()=>{setCount1(count1+1)}} >Increase1</Button>
    <Outlet/>
    
    </div>

  )
}

export default Product