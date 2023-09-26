import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="">Opps</h2>
      <Link className="bg-stone-300" to="/">Go Back</Link>
    </div>
  );
};

export default ErrorPage;