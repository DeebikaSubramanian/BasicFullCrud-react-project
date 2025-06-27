import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, Typography,TextField,Grid,Button} from "@mui/material"
import { BsDisplay } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import axios from "axios"

let paperstyle=
{
    width:400,
    padding:"20px",
    margin:"20px auto"

}
const Updateproduct = () => {

  let [updateproduct,setupdateproduct]=useState(null )

  //let paramId=useParams();
  //this paramId holds {id:1}.i.e.it takes the id value from url.
  //  we can destructure and use it. like below
  let navigate=useNavigate();
  let {id} = useParams();
  
  useEffect(()=>{
    axios.get(`http://localhost:4000/products/${id}`)
    .then(res=>setupdateproduct(res.data))
  },[])
  
 let handleChange=(e)=>
  {
    let {value,name}=e.target
    let fieldName=name.split("rating.")[1];
    if(name.includes("rating."))
    {
      setupdateproduct({...updateproduct,rating:{
        ...updateproduct.rating,[fieldName]:value
      }})
    }
    else

    {
      setupdateproduct({...updateproduct,[name]:value})
    }
    
  }

  let handleSave=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:4000/products/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json",    //these are all must in fetch post method
          },
      body:JSON.stringify(updateproduct)
    })
    
    .then(()=>{
      alert("Saved successfully");
      navigate("/productlist")
      
    })
  }
  //console.log(updateproduct)
  if(updateproduct!==null)
  {
    return (
    <Paper elevation={20} style={paperstyle}>
        <Typography variant="h5"text-align="center">Update Product</Typography>
         <Grid component="form" style={{display:"grid", gap:"20px"}} onSubmit={handleSave}>
<TextField value={updateproduct.title} onChange={handleChange} name="title" label="Title" variant="outlined" fullWidth />
<TextField  value={updateproduct.category} onChange={handleChange}  name="category" label="Category" variant="outlined" fullWidth />
<Grid container spacing={2}>
      <Grid size={6}>
        <TextField value={updateproduct.rating.rate} onChange={handleChange}  name="rating.rate" label="Rate" type="number" variant="outlined" />
      </Grid>
      <Grid size={6}>
        <TextField value={updateproduct.rating.count} onChange={handleChange}  name="rating.count" label="Count" type="number" variant="outlined" />
      </Grid>
        </Grid>
        <Button type="submit" color='success' variant="contained">Save</Button>
        </Grid>
    </Paper>
  )
}
  else{
    <p>loading...</p>
  }
  
  
}

export default Updateproduct;