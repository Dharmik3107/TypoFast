import React from "react";

const Button = (props) => {
  return (
    <button className="fontType-2 relative text-white border-2 py-2 px-10 w-52 m-8 text-2xl hoverEffect">
      {props.text}
    </button>
  );
};

export default Button;
