import React, { useEffect ,useState} from "react";
import { Arrow } from "../../icons/Arrow";
import { Arrow1 } from "../../icons/Arrow1";
import { Chevron4 } from "../../icons/Chevron4";
import { Facebook } from "../../icons/Facebook";
import { IconlyBoldStar11 } from "../../icons/IconlyBoldStar11";
import { Instagram } from "../../icons/Instagram";
import { LiChevronDown1 } from "../../icons/LiChevronDown1";
import { LiSearch } from "../../icons/LiSearch";
import { Linkedin } from "../../icons/Linkedin";
import { Size24PxFillTrue } from "../../icons/Size24PxFillTrue";
import { Twitter } from "../../icons/Twitter";
import "./style.scoped.css";
import { Box } from "../Box/Box";
import uuid from 'react-uuid';
import axios from "axios"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { MainContext } from "../..";
import CircularProgress from '@mui/material/CircularProgress';
import {Link} from 'react-router-dom'
export const CookpalHome = () => {
  const {toggleLike,recipes,setRecepies} = useContext(MainContext) 
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [filters,setFilters] = useState({search:''})
  const resetFilter =(e)=>{
      setFilters({search:''})
  }

  const handleInput =(e)=>{
    setFilters(prev=>{return {...prev,[e.target.name]:e.target.value}})
  }
  const filteredRecipes = recipes.filter((rec)=>{
    return rec.title.includes(filters.search.trim()) 
  })
  
  if(error){
    return(
      <h1>error </h1>
    )
  }
 
  return (
    <>
    <h1> recepies</h1>
    <div className="grid-and-filters"> 
        <div className='filters-container'>
          <TextField value={filters.search} onInput={handleInput} name="search"></TextField>
          <Button onClick={resetFilter}>אפס חיפוש </Button>
          </div>
        <div className="grid-recipes">
 
          {!loading  && filters? filteredRecipes.map(rec=>{
            return (
              <Box
              toggleLike={()=>toggleLike(rec.id)}
              key={rec.id}
              id={rec.id}
              liked={rec.like}
              detailed={false}
                title={rec.title}
                img={rec.image}
              > </Box>
            )
          }) :  
          <div className="container-loader">
          < CircularProgress size={'50px'} />
          </div>
        }
        
        </div>
        </div>
        </>
  );
};
