import {
  Row,
  Layout,
  Col,
  Button,
  Input,
  Collapse,
  Select,
  Menu,
  Dropdown,
  Icon
} from "antd";
import Title from "antd/lib/typography/Title";
import MonacoEditor from "react-monaco-editor";
import React from "react";
import ParamBuilder from "./param-builder";
import HeadersBuilder from "./header-builder";
import RequestBody from "./request-body";

const Content = Layout;
const { Panel } = Collapse;
const Option = Select;

const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};


const menu = (
  <Menu>
    <Menu.Item value="connect"> CONNECT</Menu.Item>
    <Menu.Item value="delete">DELETE </Menu.Item>
    <Menu.Item value="get"> GET</Menu.Item>
    <Menu.Item value="head"> HEAD </Menu.Item>
    <Menu.Item value="options"> OPTIONS </Menu.Item>
    <Menu.Item value="patch">PATCH </Menu.Item>
    <Menu.Item value="post"> POST</Menu.Item>
    <Menu.Item value="put"> PUT</Menu.Item>
    <Menu.Item value="trace">TRACE </Menu.Item>
  </Menu>
);

const RequestBuilder = () => (
  <div>
    <Content style={{ margin: "1rem" }}>
      <Row>
        <Col span="20">
          <Title level={2} ellipsis={{ rows: 1, expandable: true }}>
            Request Type description
          </Title>
        </Col>
        <Col span="4">
          <Row type="flex" justify="end">
            <Dropdown overlay={menu}>
              <Button type="primary">
                Send <Icon type="down" />
              </Button>
            </Dropdown>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginBottom: 16, marginTop: 20 }}>
        <Col span="18">
          <Input
            size="large"
            addonBefore="https://yourside.com/"
            defaultValue="mysite"
          />
        </Col>
      </Row>

      <Collapse>
        <Panel style={{ customPanelStyle }} header="Parameters" key="1">
          <ParamBuilder></ParamBuilder>
        </Panel>
      </Collapse>

      <Collapse style={{ marginTop: "1rem" }}>
        <Panel style={{ customPanelStyle }} header="Headers" key="1">
          <HeadersBuilder></HeadersBuilder>
        </Panel>
      </Collapse>

      <Collapse style={{ marginTop: "1rem" }}>
        <Panel style={{ customPanelStyle }} header="Authorisation" key="1">
          <Select
            size="large"
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Secret"
            optionFilterProp="children"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Panel>
      </Collapse>

      <RequestBody></RequestBody>
    </Content>
  </div>
);

export default RequestBuilder;
