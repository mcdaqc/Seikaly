import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Notify from './components/Notify';
import NFTItem from './components/NFTItem';
import nftMetaData from "./libs/json/_metadata.json";

function App() {
  const [account, setGlobalAccount] = useState("");
  const [notify, setNotify] = useState({type: "", msg: ""});
  
  return (
    <>
      <Notify notify={notify} setNotify={setNotify}/>
      <div className="container mx-auto px-4">
        <Header setGlobalAccount={setGlobalAccount} setNotify={setNotify}/>
        <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {nftMetaData.map((item, index) => 
            <NFTItem key={index} currentAddress={account} item={item} setNotify={setNotify}/>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
