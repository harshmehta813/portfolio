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
				<p>VS Code</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
				<p>Github</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCodepen />
				<p>Codepen</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVercel />
				<p>Vercel</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
				<p>Postman</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHeroku />
				<p>Heroku</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCodesandbox />
				<p>Codesandbox</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
