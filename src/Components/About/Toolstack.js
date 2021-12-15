import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCodesandbox,
  SiVisualstudiocode,
  SiCodepen,
  SiPostman,
  SiHeroku,
  SiGithub,
  SiVercel
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodesandbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodepen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
