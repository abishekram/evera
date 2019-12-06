import { Layout, Menu } from "antd";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Header } = Layout;
const EveHeader = () => (
  <Layout style={{ height: "64px" }}>
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/tryit">Tryit</Link>
        </Menu.Item>
        {/* <Menu.Item key="3">
            <Link to="/tryit">Showcase</Link>
          </Menu.Item> */}
      </Menu>
    </Header>
  </Layout>
);

export default EveHeader;
