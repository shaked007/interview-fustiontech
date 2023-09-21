import React from "react";
import "./style.scoped.css";

import {Link} from 'react-router-dom'
import {BsFillHeartFill} from 'react-icons/bs'
 import {AiOutlineHeart} from 'react-icons/ai'
export const Box = ({title,img,id,detailed,toggleLike,liked}) => {
  console.log('redndered')
  
  return (
   <div className="card-product"> 
   <img className="img"  src={img} /> 
    <div className="bottom"> 
    <div className="titles" >{title}</div>
    </div> 
      <div className="bottom-flex">
      <Link className="links" to={ detailed ? '/':  `/recipe/${id}`}> {detailed  ? 'חזרה למתכונים' :'למתכון' }</Link>

      <button className={liked ? 'like-btn': 'not-like-btn' } onClick={toggleLike}> {liked ? <BsFillHeartFill />: <AiOutlineHeart/> } </button>
      </div>
    </div>
  );
};
{/* <Card sx={{ maxWidth: 345 }}>
<CardMedia
  sx={{ height: 140 }}
  image={img}
  title="green iguana"
/>
<CardContent>
  <Typography  noWrap  gutterBottom variant="h5" component="div">
    {title}
  </Typography>

</CardContent>
<CardActions>
  <Button size="small"> 
 <Link to={ detailed ? '/':  `/recipe/${id}`}> {detailed  ? 'חזרה למתכונים' :'למתכון' }</Link>
  </Button>

</CardActions>
</Card> */}