import React from "react";
import { Layout, Col, Select, Row, Input, Button } from "antd";
import ParamList from "./paramlist";

const Option = Select;
const ParamBuilder = () => (
  <div>
    <ParamList></ParamList>

    <Layout>
      <Row
        type="flex"
        align="middle"
        gutter={[12, 16]}
        style={{ margin: "0.4rem" }}
      >
        <Col span={4}>
          <Select style={{ width: "100%" }} placeholder="Param Type">
            <Option value="query">Query param</Option>
            <Option value="path">Path param</Option>
          </Select>
        </Col>
        <Col span={8}>
          <Input allowClear placeholder="Param Name"></Input>
        </Col>
        <Col span={8}>
          <Input allowClear placeholder="Param Value"></Input>
        </Col>

        <Col span={2}>
          <Button size="small" type="primary" icon="plus" />
        </Col>
      </Row>
    </Layout>
  </div>
);

export default ParamBuilder;
