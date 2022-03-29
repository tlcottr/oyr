import { useState, useEffect, createContext, useContext, useCallback } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Web3Context = createContext(undefined);

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID
    }
  }
}

const Web3Provider = ({ children }) => {
  const [web3Ready, setWeb3Ready] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [web3Modal, setWeb3Modal] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [seaPort, setSeaPort] = useState(null);

  // Initialize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      })

      if (web3Modal.cachedProvider) {
        connect()
      }

      setWeb3Ready(true);
    }
  }, []);

  // Update SeaPort on Wallet Change
  const updateSeaPort = async (_provider) => {
    const currentProvider = new OpenSeaPort(_provider, {
      networkName: Network.Main,
      apiKey: process.env.NEXT_PUBLIC_OPENSEA_API_KEY,
    });

    setSeaPort(currentProvider);
  };

  // Handle Login
  const connect = useCallback(
    async function () {
      if (!wallet) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        wallet = await web3Modal.connect();
      }
      const web3 = new Web3(wallet);
      const accounts = await web3.eth.getAccounts();
      const accountBalance = await web3.eth.getBalance(accounts[0])
      const WeiToEth = web3.utils.fromWei(accountBalance, 'ether');
      

      updateSeaPort(wallet);
      setWeb3Modal(web3Modal);
      setWallet(wallet);
      setWeb3(web3);
      setAccount(accounts[0]);
      setBalance(Number(WeiToEth).toFixed(5));
    }, []
  )

  const disconnect = useCallback(
    async function () {
      clearSession()
      await web3Modal.clearCachedProvider()      
      wallet?.disconnect?.();
      wallet?.close?.();
    },
    [wallet, web3Modal]
  )

  const clearSession = () => {
    setAccount(null);
    setWallet(null);
  }

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (wallet?.on) {
      const handleAccountsChanged = (accounts) => {
        connect()
      }

      const handleChainChanged = (_hexChainId) => {
        window.location.reload()
      }

      const handleDisconnect = (error) => {
        disconnect()
      }

      wallet.on('accountsChanged', handleAccountsChanged)
      wallet.on('chainChanged', handleChainChanged)
      wallet.on('disconnect', handleDisconnect)

      return () => {
        if (wallet.removeListener) {
          wallet.removeListener('accountsChanged', handleAccountsChanged)
          wallet.removeListener('chainChanged', handleChainChanged)
          wallet.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [wallet, disconnect])

  return (
    <Web3Context.Provider
      value={{
        web3: web3,
        web3Ready: web3Ready,
        balance: balance,
        account: account,
        wallet: wallet,
        login: connect,
        logout: disconnect
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

const useWeb3 = () => {
  const context = useContext(Web3Context);
  return context;
};

export { Web3Provider, useWeb3 };
