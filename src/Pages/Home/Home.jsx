import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Home = () => {
  const cards = useLoaderData()
  // console.log(cards);
  return (
    <div className="max-w-7xl m-auto">
        <Banner></Banner>
      <div className="grid lg:grid-cols-4 gap-4 rounded-sm mt-8">
      {
        cards.map(card=><Card key={card.id} card={card}></Card>)
      }
      </div>
      <div>
    
      </div>
    </div>
  );
};

export default Home;