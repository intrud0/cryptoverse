import React, { useState } from "react";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

import "./news.css";
const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return "Loading...";
  return (
    <>
      {/* {!simplified && (
        <div className="search-crypto">
          <select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <option value="Cryptocurrency">Cryptocurrency</option>
            {data?.data?.coins.map((coin) => (
              <option value={coin.name}>{coin.name}</option>
            ))}
          </select>
        </div>
      )} */}
      <section className="news">
        <div className="news-head">
          <h2 className="news-title">Latest Cypto News</h2>
          {simplified && <a href="/news">See more ...</a>}
        </div>
        <div className="news-wrapper">
          {cryptoNews.value.map((news, i) => (
            <div className="news-content">
              <div className="news-content-head">
                <h4>{news.name}</h4>
                <img
                  className="news-image"
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt=""
                />
              </div>
              <div className="news-content-body">
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
              </div>
              <div className="news-footer">
                <div className="footer-left">
                  <img
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  />
                  <p>{news.provider[0]?.name}</p>
                </div>
                <div className="footer-right">
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </div>
              </div>
              <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                className="details"
              >
                See Details
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default News;
