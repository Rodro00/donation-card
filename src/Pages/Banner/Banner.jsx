const Banner = () => {
  const Style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/public/banner.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.7,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    position: 'relative', 
  };

  const textStyle = {
    color: 'black',
  };

  return (
    <div className="max-w-7xl m-auto" style={Style}>
      <h1 className="text-3xl font-bold mb-6" style={textStyle}>
        I Grow By Helping People In Need
      </h1>
      <div className="flex">
        <input className="p-3 ml-4" type="text" placeholder="Search here...." />
        <button className="btn mr-4 bg-red-600">Search</button>
      </div>
    </div>
  );
};

export default Banner;