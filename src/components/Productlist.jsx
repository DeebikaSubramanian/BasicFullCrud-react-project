import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from './CustomHook/useFetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../store/cartSlice"


//import { MdOutlineShoppingCartCheckout } from "react-icons/md";
//import { FaEdit } from "react-icons/fa";
//import { AiFillDelete } from "react-icons/ai";

const Productlist = () => {

  let cartState=useSelector((state)=>{return state.cart});
  /*let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading,setIsloading]=useState(true)

  useEffect(() => {

    fetch("http://localhost:4000/prducts", { method: "GET" })
      .then((response) => {
        if(response.ok){
          return response.json()  
        }
        else{
          throw new Error("Data not available")
        }
        })
      .then((data) => { setProducts(data) })
      .catch((error)=>{ setError(error.message)})
      .finally(()=>{setIsloading(false)})

  }, [])*/

  let handleDelete=(id)=>{
    axios.delete(`http://localhost:4000/products/${id}`)
    .then(()=>{
      alert("deleted")
      let newProductlist=products.filter(product=>product.id!==id)
      setProducts(newProductlist)
    })
  }

  let navigate=useNavigate();
  
  let {products,error,isLoading,setProducts}=useFetch("http://localhost:4000/products");

  if(isLoading)
  {
    return <div><h1>Loading...</h1></div>
  }
   //This useSelector will get the state from the store. we have state named cart.
  
  let dispatch=useDispatch();

  

  let addItemToCart=(product)=>{
    let checkProduct=cartState.some(cartProduct=>cartProduct.id===product.id)
    if(!checkProduct)
    dispatch(addItem(product))
    else
    alert("Already added")
  }
  return (
    <div>
      <h1>Productlist</h1>
      <article>
        <p>To create new Product</p>
        <Button onClick={()=>{navigate("/newproduct")} } >Click Me</Button>
      </article>

      <section className='products'>
        {
          products.map(product => (

            <Card style={{ width: '18rem' }} key={product.id} className='product' >
              <center>
                <Card.Img variant="top" src={product.image} style={{ width: '10rem', height: "11rem" }} />
              </center>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ overflow: "scroll", height: "120px" }}>
                  {product.price}
                  
                </Card.Text>

              </Card.Body>
              <Card.Footer style={{ display: "flex", justifyContent: "space-evenly" }}>
                
                <Button variant="primary" onClick={()=>addItemToCart(product)} >Add to Cart</Button>
                <Button variant="secondary" onClick={()=>{navigate(`/Updateproduct/${product.id}`)}} >Edit</Button>
                <Button variant="danger" onClick={()=>{handleDelete(product.id)}}>Delete</Button>
              </Card.Footer>
            </Card>
          ))
        }
      </section>
      {
        error && <p> {error} </p>
      }

         </div>
  )
}

export default Productlist