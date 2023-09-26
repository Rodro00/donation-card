import { useLoaderData } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";
import { useState } from "react";


const DonationCard = () => {
  const cards = useLoaderData()
  const [cardss,setcards] = useState([]);
  const [cardsLength, setCardsLength] = useState(4)

  const handleShowAll = () =>{
         setcardsLength(Allcards.length)
  }

  
  return (
    <div className="max-w-7xl m-auto">
      <div className="grid grid-cols-2 gap-4">
      {
        cards.map(card=><SingleCard handleShowAll={handleShowAll} card={card}></SingleCard>)
      }
    </div>
    </div>
  );
};

export default DonationCard;