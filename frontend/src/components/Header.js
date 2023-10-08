import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import makeNFT from '../libs/contracts/MakeNFT.json';

const contractAddress = '0x11C08d73A7F905f4A3075B1DDe7678514c1BEb77';
const contractABI = makeNFT.abi;

const Header = ({ setGlobalAccount, setNotify }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [nftSupply, setNftSupply] = useState(0);
  const [nftMintPrice, setNftMintPrice] = useState(0);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      setNotify({ type: 'warning', msg: 'Asegurate de tener Metamask' });
      return;
    }

    // Detectar la red
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    const mumbaiChainId = '0x13881';
    if (chainId !== mumbaiChainId) {
      setNotify({ msg: 'Estás conectado a la red de prueba de Polygon, Mumbai' });
      return;
    } else {
      setNotify({ msg: '' });
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      setIsWalletConnected(true);
      setCurrentAddress(account);
      setGlobalAccount(account);
      getContractInfo();
    } else {
      console.log('Cuenta no autorizada');
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Instale la billetera MetaMask para generar nuestra colección NFT.');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      setIsWalletConnected(true);
      setCurrentAddress(account);
      setGlobalAccount(account);
      getContractInfo();
    } catch (error) {
      console.error(error);
    }
  };

  const getContractInfo = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, contractABI, signer);

      const nftSupply = await nftContract.MAX_SUPPLY();
      const mintPrice = await nftContract.MINT_PRICE();

      setNftSupply(parseInt(nftSupply));
      setNftMintPrice(ethers.utils.formatEther(mintPrice));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const shortAddress = (addr) => {
    const prefix = addr.substring(0, 5);
    const suffix = addr.substring(addr.length - 4);

    return `${prefix}...${suffix}`;
  };

  return (
    <header aria-label="Page Header">
      <div className="mx-auto py-8 sm:py-12">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              SEIKALY
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Reclama tu insignia ya mismo! 🏅
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
              onClick={connectWallet}
            >
              {isWalletConnected ? shortAddress(currentAddress) : 'Conectar billetera 🗝️'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
