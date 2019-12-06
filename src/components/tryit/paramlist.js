import React from "react";
import Text from "antd/lib/typography/Text";
import { Tag, Row, Col, Button, Tabs } from "antd";
import { EditableTable } from "../common/key-value";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const ParamList = () => (
  <div>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Path Param" key="1">
        <EditableTable></EditableTable>
      </TabPane>
      <TabPane tab="Query Param" key="2">
        <EditableTable></EditableTable>
      </TabPane>
    </Tabs>

    {/* <Row
      type="flex"
      gutter={[12, 16]}
      align="middle"
      style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
    >
      <Col span="1">
        <Tag>Q</Tag>
      </Col>

      <Col span="4">
        <Text editable>response_type</Text>
      </Col>
      <Col span="4">
        <Text editable underline></Text>
      </Col>
      <Col span="2">
        <Button size="small" icon="minus"></Button>
      </Col>
    </Row>

    <Row
      type="flex"
      gutter={[12, 16]}
      align="middle"
      style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
    >
      <Col span="1">
        <Tag>P</Tag>
      </Col>

      <Col span="4">
        <Text editable>file_id</Text>
      </Col>
      <Col span="4">
        <Text editable underline></Text>
      </Col>
      <Col span="2">
        <Button size="small" icon="minus"></Button>
      </Col>
    </Row> */}
  </div>
);

export default ParamList;
