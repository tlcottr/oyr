import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-solid border-gray-200 w-full bg-white bottom-0 px-3 py-5 transition-opacity duration-100 bg-opacity-80 backdrop-blur">
      <div className="flex flex-row justify-between w-full px-4">
        <h3 className="text-xs">© TLC 2022</h3>
        <h3 className="text-xs">CONTRACT</h3>
      </div>
    </div>
  );
};

export default Footer;
