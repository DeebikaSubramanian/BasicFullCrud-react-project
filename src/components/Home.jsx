import React from 'react'
import useFetch from './CustomHook/useFetch'

const Home = () => {
  let{products}=useFetch("https://fakestoreapi.com/products");
  return (
    <div><h4>Home-No.of.Products {products.length}</h4></div>
  )
}

export default Home