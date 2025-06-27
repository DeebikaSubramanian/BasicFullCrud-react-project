import React from 'react'
import { useState } from 'react'
import {Paper, Typography,TextField,Grid,Button} from "@mui/material"
import { BsDisplay } from 'react-icons/bs'

let paperstyle=
{
    width:400,
    padding:"20px",
    margin:"20px auto"

}
const Newproducts = () => {

  let [newProduct,setProducts]=useState(
     {
    "title": "",
    "price": 500,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate":0,
      "count":0
    }
  }
  )
  
 let handleChange=(e)=>
  {
    let {value,name}=e.target
    let fieldName=name.split("rating.")[1];
    if(name.includes("rating."))
    {
      setProducts({...newProduct,rating:{
        ...newProduct.rating,[fieldName]:value
      }})
    }
    else

    {

      setProducts({...newProduct,[name]:value})
    }
    
  }

  let handleAdd=(e)=>{
    e.preventDefault();
    fetch("http://localhost:4000/products",{
      method:"POST",
      headers:{
        "Content-type":"application/json",    //these are all must in fetch post method
          },
      body:JSON.stringify(newProduct)
    })
    
    .then(()=>{
      alert("Data added successfully")
      setProducts({
    "title": "",
    "price": 500,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate":0,
      "count":0
    }
  })
    })
  }
  console.log(newProduct)
  return (
    <Paper elevation={20} style={paperstyle}>
        <Typography variant="h5"text-align="center">Create new Product</Typography>
         <Grid component="form" style={{display:"grid", gap:"20px"}} onSubmit={handleAdd}>
<TextField value={newProduct.title} onChange={handleChange} name="title" label="Title" variant="outlined" fullWidth />
<TextField  value={newProduct.category} onChange={handleChange}  name="category" label="Category" variant="outlined" fullWidth />
<Grid container spacing={2}>
      <Grid size={6}>
        <TextField value={newProduct.rating.rate} onChange={handleChange}  name="rating.rate" label="Rate" type="number" variant="outlined" />
      </Grid>
      <Grid size={6}>
        <TextField value={newProduct.rating.count} onChange={handleChange}  name="rating.count" label="Count" type="number" variant="outlined" />
      </Grid>
        </Grid>
        <Button type="submit" variant="contained">Add</Button>
        </Grid>
    </Paper>
  )
}

export default Newproducts