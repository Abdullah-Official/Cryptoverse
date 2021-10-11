import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar, Drawer, Col } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  MenuOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import icon from "../images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [visible, setVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    };
    handleResize();
  }, []);

  useEffect(() => {
    if (screenSize < 800) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setVisible(!visible)}
        >
          <MenuOutlined style={{ fontSize: 24, color: "#fff" }} />
        </Button>
      </div>
      <Drawer
        title="Cryptoverse"
        closable={true}
        onClose={() => setVisible(!visible)}
        visible={visible}
        placement="left"
        drawerStyle={{
          backgroundColor: " rgb(0, 21, 41)",
        }}
        headerStyle={{
          backgroundColor: " rgb(0, 21, 41)",
          color: "white",
        }}
        style={{ color: "white" }}
      >
        <Menu style={{ position: "absolute", left: 10 }} theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </Drawer>

      {active && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
