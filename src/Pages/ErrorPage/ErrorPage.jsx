import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div  className="h-[50vh] flex justify-center items-center ">
      <div>
      <h2 className="text-4xl font-bold">Opps there is no data</h2>
      <div className="mt-4 text-center">
      <Link className="bg-stone-300 p-2 " to="/">Go Back</Link>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;