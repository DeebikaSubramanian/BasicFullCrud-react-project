import { useState,useEffect } from "react";
import axios from "axios"

function useFetch(url)
{
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading,setIsloading]=useState(true)

  useEffect(()=>{

    let fetchApi=async()=>{
        try{

            let response=await axios(url);   
            setProducts(response.data)
            
            //samething with axios
                  
            //axios doesn't have .ok library so we can't use.
            //  so for axios, remove if..else and write different coding
            /*
            if(response.ok)
            {                
                let data=await response.json()
                return setProducts(data)
            }
            else
            throw new Error("Data not Found")
            */
           
   
        }
        catch(error)
        {
            setError(error.message)
        }
        finally{
            setIsloading(false)
        }
    }
    fetchApi();
  },[])
  return {products,error,isLoading,setProducts}
}
export default useFetch;