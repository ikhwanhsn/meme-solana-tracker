"use client";

import { useEffect, useState } from "react";
import { getTokenByAddress } from "../services/getTokenByAddress";
import { getTokenByQuery } from "../services/getTokenByQuery";

const InputToken = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [dataToken, setDataToken] = useState<any>(null);
  const [symbolToken, setSymbolToken] = useState("");
  const [twitterToken, setTwitterToken] = useState("");
  const [usernameTwitter, setUsernameTwitter] = useState("");
  const [usernameTwitterAlt, setUsernameTwitterAlt] = useState("");
  const [listToken, setListToken] = useState<any>(null);
  const [isTokenActive, setIsTokenActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const dataMedsos = [
    {
      name: "X Account",
      url: `${twitterToken}`,
    },
    {
      name: "X Analytics",
      url: `https://twitterscore.io/twitter/${usernameTwitter}/overview/`,
    },
    {
      name: "X Shill (CA)",
      url: `https://x.com/search?q=${tokenAddress}&src=typed_query`,
    },
    {
      name: "X Shill (Tick)",
      url: `https://x.com/search?q=$${symbolToken}&src=typed_query`,
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
  const track = async () => {
    if (!tokenAddress) {
      alert("Please enter token address");
      return;
    }
    if (tokenAddress.length < 30) {
      alert("Please enter valid token address");
      return;
    }
    setIsLoading(true);
    const data = await getTokenByAddress(tokenAddress);
    const token = await getTokenByQuery("neiro");
    const dataTwitter = await data.data.pairs[0].info.socials;
    const twitter = dataTwitter.find((tweet: any) => tweet.type === "twitter");
    const twitterAlt = data.data.pairs[0].baseToken.name;
    const twitterUsername =
      twitter?.url?.replace("https://x.com/", "") || twitterAlt;
    setDataToken(data);
    setSymbolToken(data.data.pairs[0].baseToken.symbol);
    setUsernameTwitterAlt(twitterAlt);
    setTwitterToken(twitter?.url || `https://x.com/${twitterAlt}`);
    setUsernameTwitter(twitterUsername);
    setListToken(token);
    setIsTokenActive(true);
    setIsLoading(false);
  };
  const clear = () => {
    setTokenAddress("");
    setIsTokenActive(false);
  };

  useEffect(() => {
    // console.log(dataToken);
    // console.log(listToken);
  }, [dataToken, listToken]);

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

      {isLoading && <center>Loading...</center>}
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
          {dataMedsos.map((item, index) => (
            <a key={index} href={item.url} target="_blank">
              <button className="btn btn-secondary text-white w-32">
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
