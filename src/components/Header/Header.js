import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isSidebarOpen, SetSidebarOpen] = useState(false);
  const handleSidebar = () => {
    SetSidebarOpen(() => !isSidebarOpen);
  };
  return (
    <div className="absolute top-0 left-0 right-0 w-[100vw] h-20 flex justify-between items-center px-5">
      <Link to="/">
        <h3 className="heading text-6xl text-[#FF371C]">TypoFast</h3>
      </Link>
      <svg
        width="36"
        height="36"
        viewBox="0 0 35 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleSidebar}
        className="cursor-pointer"
      >
        <path
          d="M1.22449 5.5102H33.0612C33.7375 5.5102 34.2857 4.96202 34.2857 4.28571V1.22449C34.2857 0.548189 33.7375 0 33.0612 0H1.22449C0.548189 0 0 0.548189 0 1.22449V4.28571C0 4.96202 0.548189 5.5102 1.22449 5.5102ZM1.22449 17.7551H33.0612C33.7375 17.7551 34.2857 17.2069 34.2857 16.5306V13.4694C34.2857 12.7931 33.7375 12.2449 33.0612 12.2449H1.22449C0.548189 12.2449 0 12.7931 0 13.4694V16.5306C0 17.2069 0.548189 17.7551 1.22449 17.7551ZM1.22449 30H33.0612C33.7375 30 34.2857 29.4518 34.2857 28.7755V25.7143C34.2857 25.038 33.7375 24.4898 33.0612 24.4898H1.22449C0.548189 24.4898 0 25.038 0 25.7143V28.7755C0 29.4518 0.548189 30 1.22449 30Z"
          fill="#FF371C"
        />
      </svg>
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} setOpen={SetSidebarOpen} />
      )}
    </div>
  );
};

export default Header;
