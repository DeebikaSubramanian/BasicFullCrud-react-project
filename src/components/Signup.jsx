import React, { useState, useEffect} from 'react'
import {Paper, Typography,TextField,Grid,Button} from "@mui/material"
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

//deebideebikask_08@gamil.com
const Signup = () => {

  let schema=Yup.object().shape({
    name : Yup.string()
            .required("Name is mandatory")
            .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/,"Enter your FullName "),   //this [A-Z]means any caps letter bw A to Z then any letters from a to z that plus means more than one letter. so first letter must be in caps and only one letter. second is more than one small letters then space and again same for lastname.
  
    email : Yup.string().email()
            .required("Email is mandatory")
            .matches(/^[a-z0-9]+@[a-z]{3,5}.[a-z]{2,3}$/,"Enter a proper mailId"),

    age : Yup.number().integer().positive().required("Enter your age").min(18,"Enter age between 18 to 50").max(50,"Enter age between 18 to 50"),
    password : Yup.string().required("Password is must"),
    Cpassword : Yup.string().oneOf([Yup.ref("password"),null],"cpassword must match with password")
  })                                                     

const [input,setInput]=useState("");

//this register,handleSubmit fromState and errors are useForm built-in props and destructured and took it.
// all of these do some functions by itself
// register is like e.target.value. means it takes the input value which we type.
//handleSubmit is a function and it sends the value of all field to its parameter and that parameter is all also a function.
//  we assign this function to onSubmit and need to define. 
// Check onSubmit.here this handlesubmit send all values to handleData. while deifing pass data as its parameter then this data recieves all the data. console and check.

const {register,handleSubmit,formState:{errors}}=useForm({
      resolver:yupResolver(schema)     //this all are from the library. schema is the one we define.
})
console.log(errors)

let paperstyle=
{
    width:400,
    padding:"20px",
    margin:"20px auto",
    display:"grid",
    gap: "20px"

}

let handleData=(data)=>{
console.log(data)
}
  return (
    <Paper elevation={20} style={paperstyle} component="form" onSubmit={handleSubmit(handleData)}>
        <Typography variant="h6">Creat an account</Typography>
        {//this register has two parameters, one is key ex.name another is a error required object.
        }
        <TextField label="Name" {...register("name",{required:"Name is mandotary"})} 
              helperText={errors.name?.message} error={!!errors.name}></TextField> 
{
/* error={!!errors.name} this error is also bootstrap props. this one will show the error and the field in red.
!! means it converts that errors.name to boolean type. if its true that means if there is a name in errors object it returns true.
only if error occurs the error objects have name otherwise false.
This helperText is bootstrap props. 
errors in useForm props is as below if console errors you will get the below
name:message:"Name is mandotary" 
so we can get errors.name.message to display the error message

that question mark is called chaining operator in react. refer google*/
}
        <TextField label="Email" {...register("email") } helperText={errors.email?.message} error={!!errors.email}></TextField>
        <TextField label="Age" {...register("age")} helperText={errors.age?.message} error={!!errors.age} ></TextField>
        <TextField label="Password" {...register("password")} helperText={errors.password?.message} error={!!errors.password} ></TextField>
        <TextField label="Confirm Password" {...register("Cpassword")} helperText={errors.Cpassword?.message} error={!!errors.Cpassword} ></TextField>
        <Button variant="contained" type="submit">Signup</Button>
       
      </Paper>

  )
}

export default Signup