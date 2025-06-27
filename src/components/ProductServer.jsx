import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductServer = () => {
  return (
    <div>
        <Link to="/productlist">Productlist</Link>
        <Outlet/>
    </div>
  )
}

export default ProductServer