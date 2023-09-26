import { useLoaderData } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";
import { useEffect, useState } from "react";


const DonationCard = () => {



const [allCard, setAllCard] = useState([])

const [cardLength, setCardLength] = useState(4)

useEffect(()=>{
     fetch('/public/cart.json')
     .then(res=>res.json())
     .then(data=>setAllCard(data))
},[])



  
  return (
    <div className="max-w-7xl m-auto mt-7">
      <div className="grid lg:grid-cols-2 gap-4">
      {
        allCard.slice(0,cardLength).map(card=><SingleCard key={card.id} card={card}></SingleCard>)
      }
    </div>
    <div className={cardLength === allCard.length && 'hidden'}>
    <div className="text-center mt-4">
    <button onClick={()=>setCardLength(allCard.length)} className="btn bg-green-600">Show All</button>
    </div>
    </div>
    </div>
  );
};

export default DonationCard;