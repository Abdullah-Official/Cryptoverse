import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Input } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/crypto-api";
import { CryptoCurrencies, News } from "./index";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const { Title } = Typography;
  const globalStats = data?.data?.stats;
 
  if (isFetching) return "Loading...";

  return (
    <>
    
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col md={12} xl={12} xs={24} span={12}>
          <Statistic value={globalStats.total} title="Total Cryptocurrencies" />
        </Col>
        <Col md={12} xl={12} xs={24} span={12}>
          <Statistic
            value={millify(globalStats.totalExchanges)}
            title="Total Exchanges"
          />
        </Col>
        <Col md={12} xl={12} xs={24} span={12}>
          <Statistic
            value={millify(globalStats.totalExchanges)}
            title="Total Market Cap"
          />
        </Col>
        <Col md={12} xl={12} xs={24} span={12}>
          <Statistic
            value={millify(globalStats.total24hVolume)}
            title="Total 24h Volume"
          />
        </Col>
        <Col md={12} xl={12} xs={24} span={12}>
          <Statistic
            value={millify(globalStats.totalMarkets)}
            title="Total Markets"
          />
        </Col>
      </Row>
      <div
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Title level={3} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={4} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <CryptoCurrencies simplified />
      <div
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Title level={3} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={4} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
