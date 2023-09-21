import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import App from './components/app';
import { useContext,createContext ,useState,useEffect} from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {CookpalHome} from './components/CookpalHome'
import Detailed from './components/Detailed/Detailed'
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<CookpalHome />
  },{
    path:'/recipe/:id',
    element:<Detailed/>
  }
])
export const MainContext = createContext()
const ContextComponent =({children})=>{
  const [recipes,setRecepies] = useState([])
  useEffect(()=>{
    
    const getFunc = async  () =>{
      let response
      try{
      response = await  axios.get('http://localhost:3001/recipes')
      }catch(err){
        // setError(true)
      }
       console.log(response.data)
       setRecepies(response.data)
       
    }

      getFunc()    
  },[])
   const toggleLike= async(id)=>{
    let res;  
       let val = recipes.filter((rec) =>rec.id==id)[0]
       let newLike = !val.like
          res= await axios.put(`http://localhost:3001/recipes/${id}`,{
          ...val,like:newLike
            
          })
          console.log(res.data)
      
        setRecepies(prev=>{
          return prev.map((item)=>{
            return item.id == id ? {...item,like:!item.like} : item 
          })
        }) 
  }
    
      return(
        <MainContext.Provider value={{recipes,toggleLike,setRecepies}}>
          {children}
        </MainContext.Provider>
      )

}



root.render(

    <ContextComponent> 
      <RouterProvider router={router} /> 
    </ContextComponent>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
