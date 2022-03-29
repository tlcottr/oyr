import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { shortAddress } from "../utils";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/connectors";
import { useEffect } from "react";
import React from "react";

export default function Home() {
  const { wallet, active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  return (
    <div>
      <div className="border-b border-solid border-gray-200 fixed w-screen bg-white top-0 p-3 flex flex-row justify-between">
        <div className="ml-4 cursor-pointer hover:opacity-50 transition-opacity duration-100 items-center">
          <Link href="#" passHref>
            <Image src="/static/nikeLogo.png" alt="" height="16" width="44" />
          </Link>
        </div>
        <div className="mr-4 flex flex-row">
          <h3
            onClick={connect}
            className="cursor-pointer hover:opacity-50 transition-opacity duration-100"
          >
            {active ? (
              <span onClick={disconnect}>{shortAddress(account)}</span>
            ) : (
              <span>Connect Wallet</span>
            )}
          </h3>
          <span className="dot"></span>
        </div>
      </div>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-center px-12">Own your route.</h1>
        <h3 className="text-2xl max-w-2xl text-center py-11">
          When you put in the miles, nobody can take them away from you. Mint
          your run as an NFT on the blockchain now.
        </h3>
        <div className="flex flex-row justify-between">
          <button className="bg-black hover:bg-gray-500 text-white py-2 px-10 rounded-full mx-3">
            Mint your run
          </button>
          <button className="bg-white hover:bg-black hover:text-white text-black border border-black py-2 px-10 rounded-full mx-3 transition-opacity duration-100">
            How it works
          </button>
        </div>
      </div>
      <div className="border-t border-solid border-gray-200 fixed w-screen bg-white bottom-0 p-3 transition-opacity duration-100">
        <h3 className="ml-4">© TLC 2022</h3>
      </div>
    </div>
  );
}
