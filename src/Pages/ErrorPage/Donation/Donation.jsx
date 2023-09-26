
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
  const btn_back_ground = {
    backgroundColor: findDonate.btn_background_color,
  }


  return (
    <div className="max-w-7xl m-auto ">

      <div className="gap-4 rounded-md m-4">
        <img className="w-full" src={findDonate.cover} alt="" />
        <button style={btn_back_ground} className="btn btn-primary text-white  relative">Donate {findDonate.price}</button>
        <div className="mt-6 gap-4">
          <h2 className="card-title text-black text-xl font-bold ">{findDonate.title}</h2>
          <p className="mt-4">{findDonate.description}</p>
        </div>
      </div>
    </div>

  );
};

export default Donation;