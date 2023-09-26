import { useState } from "react";
import { Link } from "react-router-dom";


const SingleCard = ({card,handleShowAll}) => {
  

  const {cover,title,price,category,background_color} = card;

  const back_ground = {
    backgroundColor : background_color,
  }

  
  console.log(card)
  return (
    <div style={back_ground} className="flex gap-4 rounded-xl ">
      <div>
        <img src={cover} alt="" />
      </div>
      <div className="py-8">
        <Link style={back_ground} className="text-[15px]">{category}</Link>
        <p>{title}</p>
        <p>{price}</p>
        <button className="btn btn-primary">View Details</button>
      </div>
      <button onAuxClick={handleShowAll} >Show All</button>
    </div>
  );
};

export default SingleCard;