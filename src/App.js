import React, { useEffect, useState } from 'react'
import { api } from './Componment/api'
import { Data } from './Componment/data'
import Form from './Componment/form'
import { Data1 } from './Componment/data'
const App = () => {
const [useData,setUseData]=useState(false)

const handlerSubmit =()=>{
  setUseData (true)
}


//   useEffect=()=>{
//     getData()
//   }
// const getData= async ()=>{
//   const sareesData = await api()
//   if(sareesData.products === "success"){
//     setData(sareesData.data)
//   }
//   else{
//     alert("not came")
//   }
// }


  return (
    <div>
  <center>
      {Data.sarees.map(item=><li key={item.id} >{item.title},{item.price},{item.description},{item.category},{item.image}</li>)}
      <button onClick={handlerSubmit}>click</button>
      {useData === true && <Form/>}
      </center>
    </div>
  )
}

export default App