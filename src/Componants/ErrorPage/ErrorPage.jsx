import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border min-h-screen">
        <img className="" src="https://shorturl.at/fwGOP" alt="" />
        
        <Link to="/">
        <button className="btn text-3xl px-6 bg-transparent t-primary hover:bg-[#23be0aCC] border-[#23be0a] hover:text-white">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
