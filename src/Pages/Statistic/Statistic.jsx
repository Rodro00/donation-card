import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/storage";


const Statistic = () => {
  const cards = useLoaderData()
  // console.log(cards)
  useEffect(()=>{
    const storedids = getStoredDonation();
    if(cards.length > 0){
      const donationCards = cards.filter(card=>storedids.includes(card.id))
      console.log(cards,storedids, donationCards)
    }
  },[])
  return (
    <div>
      <h1>This is the statistic part. This part will be manipulate as soon as possible.</h1>
    </div>
  );
};

export default Statistic;
