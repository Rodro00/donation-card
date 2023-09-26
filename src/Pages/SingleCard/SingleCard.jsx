import { useState } from "react";
import { Link } from "react-router-dom";


const SingleCard = ({ card, handleShowAll }) => {


  const { cover, title, price, category,text_color, background_color,btn_background_color } = card;

  const back_ground = {
    backgroundColor: background_color,
      color : text_color,
  }

  const btn_back_ground = {
    backgroundColor : btn_background_color ,
  
  }
  const textColor = {
    color : text_color,
  }


  console.log(card)
  return (
    <div>
      <div style={back_ground} className="md:flex gap-4 rounded-xl ">
        <div>
          <img className="w-full" src={cover} alt="" />
        </div>
        <div className="items-center py-6">
          <Link style={back_ground} className="rounded-sm p-1">{category}</Link>
          <p className="text-black text-xl font-bold" >{title}</p>
          <p className="font-bold text-md" style={textColor}>{price}</p>
          <button style={btn_back_ground} className="btn text-white  ">View Details</button>
        </div>
      </div>
       
    </div>
  );
};

export default SingleCard;