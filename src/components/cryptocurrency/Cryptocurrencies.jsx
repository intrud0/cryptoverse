import { useState, useEffect } from "react";
import CryptoCard from "./CryptoCard";
import "./cryptocurrencies.css";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <input
            type="text"
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <section className="content">
        <div className="content-head">
          <h2 className="content-title">
            Top 10 Cryptocurrencies in the world
          </h2>
          {simplified && <a href="/cryptocurrencies">See more ...</a>}
        </div>

        <div className="content-wrapper">
          {cryptos?.map((currency) => (
            <CryptoCard
              key={currency.uuid}
              coinid={currency.uuid}
              name={currency.name}
              img={currency.iconUrl}
              price={currency.price}
              marketcap={currency.marketCap}
              change={currency.change}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Cryptocurrencies;
