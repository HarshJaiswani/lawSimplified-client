import React from "react";

const Header = (props) => {
  const { title = "Law Simplified" } = props;
  return (
    <div className="bg-bg-img bg-[length:100vw_100%] flex justify-center items-center bg-no-repeat w-full h-[70px] md:h-[150px]">
      <h3 className="text-white text-4xl font-mono">{title}</h3>
    </div>
  );
};

export default Header;
