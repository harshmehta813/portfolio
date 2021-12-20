import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tictac from "../../Assets/Projects/TIC-TAC-TOE.png";
import Smatbot from "../../Assets/Projects/Smatbot.png";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="TIC TAC TOE"
              description="A simple game where two players can play TIC TAC TOE & get the winner or draw."
              techstack="HTML | CSS | JS"
              link="https://tictac-toe.vercel.app/"
              git="https://github.com/harshmehta813/react-game-assignment-tic-tac-toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Smatbot}
              isBlog={false}
              title="Smatbot"
              description="Smatbot provides a facility to create a chatbot for all business needs."
              techstack="HTML | CSS | JS"
              link="https://harshmehta813.github.io/smatbot/"
              git="https://github.com/harshmehta813/smatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="A todo app where users can add tasks, mark it as done, view completed tasks, change the status of tasks & delete the tasks."
              techstack="HTML | CSS | JS | React"
              link="https://todo-page.vercel.app/"
              git="https://github.com/harshmehta813/Todo-4860"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
