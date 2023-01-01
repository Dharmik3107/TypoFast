import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setOpen }) => {
  const handleSidebar = () => {
    setOpen(() => !isOpen);
  };
  return (
    <nav className="absolute right-0 top-0 bottom-0 bg-white w-[20vw] h-[100vh] p-7 shadow-lg flex justify-center items-start">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleSidebar}
        className="absolute top-4 left-4 cursor-pointer"
      >
        <path
          d="M12.6635 20.444L11.5795 21.528C11.1205 21.9869 10.3783 21.9869 9.92419 21.528L0.432007 12.0407C-0.0269775 11.5817 -0.0269775 10.8395 0.432007 10.3854L9.92419 0.893188C10.3832 0.434204 11.1254 0.434204 11.5795 0.893188L12.6635 1.97717C13.1273 2.44104 13.1176 3.19788 12.6439 3.65198L6.76013 9.25745H20.7933C21.4427 9.25745 21.9652 9.77991 21.9652 10.4293V11.9918C21.9652 12.6412 21.4427 13.1637 20.7933 13.1637H6.76013L12.6439 18.7692C13.1224 19.2233 13.1322 19.9801 12.6635 20.444Z"
          fill="#2EC4B6"
        />
      </svg>

      <ul className="w-4/5 flex flex-col justify-center items-center mt-20">
        <Link to="/" className="w-4/5">
          <li className="font-semibold bg-[#2EC4B6] w-full text-center shadow-lg rounded-sm cursor-pointer text-white py-1 text-xl mb-2">
            Home
          </li>
        </Link>
        <Link to="/type" className="w-4/5">
          <li className="font-semibold bg-[#2EC4B6] w-full text-center shadow-lg rounded-sm cursor-pointer text-white py-1 text-xl my-2">
            Type
          </li>
        </Link>
        <li className="font-semibold bg-gray-400 w-4/5 text-center shadow-lg rounded-sm cursor-not-allowed text-white py-1 text-xl my-2 ">
          Records
        </li>
        <li className="font-semibold bg-gray-400 w-4/5 text-center shadow-lg rounded-sm cursor-not-allowed text-white py-1 text-xl my-2">
          Leaderboard
        </li>
        <li className="font-semibold bg-gray-400 w-4/5 text-center shadow-lg rounded-sm cursor-not-allowed text-white py-1 text-xl mt-2">
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
