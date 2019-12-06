import React from "react";
import { Layout, Row, Select, Input, Col, Button } from "antd";
import { EditableTable } from "../common/key-value";

const Option = Select;

const HeadersBuilder = () => (
  <div className="content-area">
    <EditableTable></EditableTable>
    <Layout style={{ margin: "1px" }}>
      <Row
        type="flex"
        gutter={[12, 16]}
        align="middle"
        style={{ margin: "0.4rem" }}
      >
        <Col span={11}>
          <Input placeholder="Header key"></Input>
        </Col>
        <Col span={11}>
          <Input placeholder="Header value"></Input>
        </Col>
        <Col span="2">
          <Button size="small" type="primary" icon="plus" />
        </Col>
      </Row>
    </Layout>
  </div>
);

export default HeadersBuilder;
