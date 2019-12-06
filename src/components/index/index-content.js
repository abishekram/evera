import { Row, Col, Button } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import illustartion from "../../assets/illustration.svg";

const HomeContent = () => (
  <div>
    <Row type="flex" align="middle" gutter={[24, 16]}>
      <Col span={12}>
        <img
          src={illustartion}
          width="85%"
          alt="Homepage illustartion"
          style={{ margin: "2rem" }}
        />
      </Col>
      <Col span={8} offset={3}>
        <div className="app-name">
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ height: "inherit" }}
          >
            <Col span={24}>
              <Row>
                <Title style={{ fontSize: "65px", marginBottom: 0 }}>
                  Evera
                </Title>
              </Row>
              <Row>
                <Col offset="2">
                  <Title level="4">API Console </Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>

    <Row style={{ height: "10vh" }}>
      <Col span="24">
        <Row type="flex" justify="center">
          <Title level="4">
            Online API Console. Get started with a openAPI definition{" "}
          </Title>
        </Row>
        <Row type="flex" justify="center">
          <Button type="primary" size="large">
            Get Started
          </Button>
        </Row>
      </Col>
    </Row>

    <style jsx>{`
      .app-name {
        height: 70vh;
      }

      .h-inherit {
        height: inherit;
      }
    `}</style>
  </div>
);

export default HomeContent;
