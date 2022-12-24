import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/connectors";
import { useEffect } from "react";
import React from "react";
import Layout from "../components/Layout";

export default function Home(props) {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="h-h-screen flex flex-col justify-between items-center md:max-w-[862.21px] max-w-[320px]">
          <p className="text-center text-9xl font-Futura uppercase leading-[.75em] tracking-tight mb-4">
            Own your route
          </p>
          <div className="flex md:flex-row flex-col justify-between items-center">
            <p className="font-helvetica text-sm text-center md:text-left leading-[1.25em] md:w-1/2">
              When you put in the miles, nobody can take them away from you.
              Mint your run as an NFT on the blockchain now.
            </p>
            <div className="flex flex-row my-4 md:my-[0]">
              <Link href="/about">
                <button className="border-black border border-solid py-1 px-4 rounded-full text-white bg-black text-sm mx-1 hover:opacity-75 active:scale-[95%] transform">
                  About
                </button>
              </Link>
              <a
                href="https://strava.com/oauth/authorize?client_id=98980&redirect_uri=http://localhost:3000/data&response_type=code&scope=read_all,activity:read_all"
                className="bg-blue-500 py-1 px-4 rounded-full text-white text-sm mx-1 md:mr-[0] hover:opacity-90 active:scale-[95%] transform"
              >
                <button>Connect Run Data</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
