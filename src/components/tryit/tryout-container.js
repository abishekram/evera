import { Row, Button, Layout, Menu, Icon, Breadcrumb, Col } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import RequestBuilder from "./request-builder";
import React from "react";
import MonacoEditor from "react-monaco-editor";

const { Header, Content, Footer, Sider } = Layout;

const TryoutContainer = () => (
  <div>
    <Row type="flex" justify="end" style={{ margin: "1em" }}>
      <Button>Manage secrets</Button>
    </Row>

    <Row type="flex">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Row type="flex">
            <Col span={16}>
              <RequestBuilder></RequestBuilder>
            </Col>
            <Col span={8}>
              <MonacoEditor language="javascript" theme="vs" value="" />
            </Col>
          </Row>
        </Layout>
      </Layout>
    </Row>
  </div>
);

export default TryoutContainer;
