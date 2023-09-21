
import react, { useState } from 'react'
import './Detailed.scoped.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Box } from '../Box/Box'
import { CircularProgress } from '@mui/material'
import { useContext } from "react";
import { MainContext } from "../..";
const Detailed =()=>{
      const {id} = useParams()
      const {toggleLike,recipes,loader,error} = useContext(MainContext) 


      const [item,setItem ] = useState(null)
      const localUpdate=(id)=>{
            console.log(id)
            toggleLike(id)
           
      }
      let final = recipes.filter((rec)=> rec.id ==id)

          if(error){
            return (<div> <h1>error! </h1></div>)
          }

      if(loader){
            return (
                  <div>
            <CircularProgress />
            </div>
            )
      }
          return (
            <div>
                 {final && final.map((item)=>{
                 
                 
                 return <Box key={item.id} liked={item.like} img={item.image} detailed={true} toggleLike={()=>localUpdate(id)}  title={item.title}/>
                 })}
               
                 </div>
          )
}




export default Detailed


