import React from "react";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <div className="h-h-screen flex flex-col md:flex-row justify-between items-center max-w-[908px] m-6">
        <div className="font-helvetica text-md text-left leading-[1.25em] bg-black text-white w-[300px] h-[300px] rounded-lg m-2 p-6">
          <p className="font-bold">Step 1</p>
          <p>Connect your running data</p>
        </div>
        <div className="font-helvetica text-md text-left leading-[1.25em] bg-black text-white w-[300px] h-[300px] rounded-lg m-2 p-6">
          <p className="font-bold">Step 2</p>
          <p>Choose your NFT style</p>
        </div>
        <div className="font-helvetica text-md text-left leading-[1.25em] bg-black text-white w-[300px] h-[300px] rounded-lg m-2 p-6">
          <p className="font-bold">Step 3</p>
          <p>Mint your unique miles</p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
