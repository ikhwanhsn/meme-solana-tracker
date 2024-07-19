"use client";

import { useState } from "react";

const InputToken = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [isTokenActive, setIsTokenActive] = useState(false);
  const dataTools = [
    {
      name: "Dexscreener",
      url: `https://dexscreener.com/solana/${tokenAddress}`,
    },
    {
      name: "Dextools",
      url: `https://www.dextools.io/app/en/solana/pair-explorer/${tokenAddress}`,
    },
    {
      name: "Solscan",
      url: `https://solscan.io/token/${tokenAddress}`,
    },
    {
      name: "Rugcheck",
      url: `https://rugcheck.xyz/tokens/${tokenAddress}`,
    },
    {
      name: "Bubblemaps",
      url: `https://app.bubblemaps.io/sol/token/${tokenAddress}`,
    },
  ];
  const dataExchanges = [
    {
      name: "Raydium",
      url: `https://raydium.io/swap/?inputMint=sol&outputMint=${tokenAddress}`,
    },
    {
      name: "Jupiter",
      url: `https://jup.ag/swap/SOL-${tokenAddress}`,
    },
    {
      name: "Photon",
      url: `https://photon-sol.tinyastro.io/en/lp/${tokenAddress}`,
    },
  ];
  const track = () => {
    if (!tokenAddress) {
      alert("Please enter token address");
      return;
    }
    if (tokenAddress.length < 30) {
      alert("Please enter valid token address");
      return;
    }
    setIsTokenActive(true);
  };
  const clear = () => {
    setTokenAddress("");
    setIsTokenActive(false);
  };

  return (
    <main className=" bg-background text-text mt-24 w-full mx-auto">
      <section className="grid grid-cols-5 w-full md:w-2/5 gap-x-1 mb-4 mx-auto px-3 md:px-0">
        <input
          type="text"
          placeholder="Paste your token address here..."
          onChange={(e) => setTokenAddress(e.target.value)}
          value={tokenAddress}
          className="input text-text input-bordered bg-white col-span-3"
        />
        <button className="btn btn-primary text-white" onClick={track}>
          Track
        </button>
        <button className="btn btn-error text-white" onClick={clear}>
          Clear
        </button>
      </section>
      {isTokenActive && (
        <section className="mx-auto space-x-1 w-fit">
          {dataTools.map((item, index) => (
            <a key={index} href={item.url} target="_blank">
              <button className="btn btn-warning text-white w-28">
                {item.name}
              </button>
            </a>
          ))}
        </section>
      )}
      {isTokenActive && (
        <section className="mx-auto w-fit space-x-1 mt-2">
          {dataExchanges.map((item, index) => (
            <a key={index} href={item.url} target="_blank">
              <button className="btn btn-info text-white w-28">
                {item.name}
              </button>
            </a>
          ))}
        </section>
      )}
    </main>
  );
};

export default InputToken;
