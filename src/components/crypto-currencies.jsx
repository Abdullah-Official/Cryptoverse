import React, { useState, useEffect } from "react";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/crypto-api";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading ...";
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto Currency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row
        gutter={[32, 32]}
        style={{ marginTop: 20 }}
        className="crypto-card-container"
      >
        {cryptos?.map((v, i) => {
          return (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={i}>
              <Link to={`/crypto/${v.id}`}>
                <Card
                  title={`${v.rank}. ${v.name}`}
                  extra={<img className="crypto-image" src={v.iconUrl} />}
                  hoverable
                >
                  <p>Price: {millify(v.price)}</p>
                  <p>Market Cap: {millify(v.marketCap)}</p>
                  <p>Daily Change: {millify(v.change)}%</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
