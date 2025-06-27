import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {

    //the below newUser is from route tag from app.js. it must be same name as in route path.
    let {newUser} = useParams(); 
    let navigate=useNavigate();

    function handleNavigate()
    {
        navigate("/")
    }

    console.log(newUser)

  return (
    <div>Login:{newUser}
    <button onClick={handleNavigate}>Move to Home</button>
    </div>
  )
}

export default Login