import React from 'react'
import Home from "./components/Home"
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Product from './components/Product'
import ProductServer from './components/ProductServer'
import Productdetails from './components/Productdetails'
import Productlist from './components/Productlist'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar'
import { NotFound } from '../../React-routing/src/NotFound'
import Newproducts from './components/Newproducts'
import Updateproduct from './components/Updateproduct'
import Wishlist from './components/Wishlist'



function App() {

  
  if(!localStorage.getItem("cart"))
  {
  localStorage.setItem("cart",JSON.stringify([]))
  
  }

   let user="yogi";
  return (
    
      <div className="app">

             
        <Router>
          
          
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Product" element={<ProductServer/>} ></Route>
            <Route index element={<Productdetails/>}></Route>          
                  {
                  //Nested Route. to be given inside the parent route and also add<Outlet> in parent component. 
                  // here product is a parent component 
                }
                <Route path="productdetails" element={<Productdetails/>} />
                <Route path="productlist" element={<Productlist/>} />
                <Route path="newproduct" element={<Newproducts/>}></Route>
                <Route path="updateproduct/:id" element={<Updateproduct/>}></Route>
                <Route path="wishlist" element={<Wishlist/>}></Route>
                {//to manage the undefined path.i.e.if i give any path that i didn,t define then this will work
                //<Route path="*" element={<NotFound />}></Route> 
                }
                
                    


            {//here this {newUser} is a parameter for the url, it can be any name.
            //  i.e, link tag through the value, here it recieves the value. just like a function
            }
             <Route path="/Login/:newUser" element={<Login/>} ></Route>   
             <Route path="/Signup" element={<Signup/>} ></Route>


          </Routes>
        </Router>
     
    </div>
  )
}

export default App
