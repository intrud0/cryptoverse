import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import "./cryptocurrencies.css";

const CryptoCard = ({ coinid, name, img, price, marketcap, change }) => {
  return (
    <div className="content-list">
      <div className="content-browser">
        <div className="content-circle color1"></div>
        <div className="content-circle color2"></div>
        <div className="content-circle color3"></div>
      </div>
      <div className="content-header">
        <h3>{name}</h3>
        <img class="crypto-image" src={img}></img>
      </div>
      <div className="content-info">
        <p>
          <span className="content-info-name">Price:</span> {millify(price)}
        </p>
        <p>
          <span className="content-info-name">Market Cap:</span>{" "}
          {millify(marketcap)}
        </p>
        <p>
          <span className="content-info-name">Daily Change:</span>{" "}
          {millify(change)}
        </p>
      </div>
      <Link to={`/crypto/${coinid}`} className="coindetails">
        See Details
      </Link>
    </div>
  );
};

export default CryptoCard;
