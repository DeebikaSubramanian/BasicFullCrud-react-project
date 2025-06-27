import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {removeItem} from "../store/cartSlice"
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {

    let navigate=useNavigate()

    //useSelector is used to bring the states in the reducers from the store.
    // useSelector pass function as a parameter. 
    // And that parameter is a state and that state comes from store. so here cart is our state.
    let cartProducts=useSelector((state)=>{return state.cart})
    //console.log(cartProducts)

      let dispatch=useDispatch();

      let handleDelete=(reduxItemId)=>{
        dispatch(removeItem(reduxItemId))
        }
      



  return (
    <div>
        Wishlist
{
        cartProducts.length!==0 ? (
              <section className='products'>
                {
                  cartProducts.map(product => (
        
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
                        
                        <Button variant="primary" onClick={()=>navigate("/productlist")} >Continue Shopping</Button>
                        
                        <Button variant="danger" onClick={()=>{handleDelete(product.id)}}>Delete</Button>
                      </Card.Footer>
                    </Card>
                  ))
                  
                }
              </section>
        ):<h1>Sorry,Empty cart, Add products to cart !<Button variant="primary" onClick={()=>navigate("/productlist")} >Continue Shopping</Button></h1>
    }

    </div>
  )
}

export default Wishlist