const Banner = () => {

  return (

    <div className="h-[50vh] flex justify-center items-center my-5 ">
      <div>
        <h1  className="text-5xl mb-10 font-bold">I Grow By Helping People In Need</h1>
        <input className="border-2 w-[470px] h-[48px] px-4 rounded-lg" type="text" placeholder="search here..." />
        <button className="btn bg-[#FF444A]">Search</button>
      </div>
    </div>


  );
};

export default Banner;