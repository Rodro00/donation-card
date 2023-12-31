/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({card}) => {
  // console.log(card)
  const {cover,title,category,background_color,text_color,id} = card;

  const back_ground = {
    backgroundColor : background_color,
    color : text_color,
  }
  const textColor = {
    color : text_color,
  }
  return (
    <div>
    <Link to={`/donation/${id}`}>
    <div style={back_ground} className={`card card-compact  bg-base-100`}>
  <figure><img className="w-full" src={cover} alt="Shoes" /></figure>
  <div className="card-body">
  <div className="">
  <Link style={back_ground} className="rounded-sm p-1">{category}</Link>
 </div>
    <h2 style={textColor} className="card-title ">{title}</h2> 
  </div>
</div>
    </Link>
    </div>
  );
};

export default Card;