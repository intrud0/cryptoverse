import React from "react";
import millify from "millify";
import { Cryptocurrencies, News } from "../index";

import { useGetCryptosQuery } from "../../services/cryptoApi";

import "./homepage.css";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">Global Crypto Stats</h2>
        </div>
        <div className="hero-data-wrapper">
          <div className="hero-data">
            <h5>Total Crypto</h5>
            <p>{millify(globalStats.total)}</p>
          </div>
          <div className="hero-data">
            <h5>Total Market Cap </h5>
            <p>{millify(globalStats.totalMarketCap)}</p>
          </div>
          <div className="hero-data">
            <h5>Total Markets</h5>
            <p>{millify(globalStats.totalMarkets)}</p>
          </div>
          <div className="hero-data">
            <h5>Total Echanges</h5>
            <p>{millify(globalStats.totalExchanges)}</p>
          </div>
          <div className="hero-data">
            <h5>Total 24h Volume</h5>
            <p>{millify(globalStats.total24hVolume)}</p>
          </div>
        </div>
      </div>
      <Cryptocurrencies simplified />
      <News simplified />
    </>
  );
};

export default Homepage;
