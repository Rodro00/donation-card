
import { Link, useLoaderData, useParams } from "react-router-dom";



const Donation = () => {
  const { id } = useParams();
  // const idInt = parseInt(id);
  console.log(id)


  const donations = useLoaderData()

  const findDonate = donations.find(donation => donation.id == id)
  console.log(findDonate)
  const back_ground = {
    backgroundColor: findDonate.background_color,
  }

  return (
    <div className="max-w-7xl m-auto">
  
        <div  style={back_ground} className="gap-4 rounded-md m-4">
          <img className="w-full" src={findDonate.cover} alt="" />
          <h2 className="card-title ">{findDonate.title}</h2>
          <button className="btn btn-primary text-white ">{findDonate.price}</button>
          <p>{findDonate.description}</p>
        </div>
      </div>

  );
};

export default Donation;