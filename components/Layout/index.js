import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="md:px-[0] px-6">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
