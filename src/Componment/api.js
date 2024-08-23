

import axios from 'axios'
import React from 'react'

 export const api = async () => {
 try{
const res = await axios.get(" https://fakestoreapi.com/products")
return res?.data
 }
 catch(err){
console.log(err);
throw err
 }
}

