import React from "react";
import Image from "next/image";
import Link from "next/link";
import Connect from "/components/Connect";

const Header = () => {
  return (
    <div className="border-b border-solid border-gray-200 w-full bg-white bottom-0 p-3 transition-opacity duration-100 bg-opacity-80 backdrop-blur">
      <div className="flex flex-row justify-between mx-3">
        <div className="hover:opacity-50 cursor-pointer">
          <Link href="/" passHref>
            <Image src="/static/nikeLogo.png" alt="" height="16" width="44" />
          </Link>
        </div>
        <div>
          <Connect />
        </div>
      </div>
    </div>
  );
};

export default Header;
