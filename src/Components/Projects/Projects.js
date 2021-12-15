import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tictac from "../../Assets/Projects/TIC-TAC-TOE.png";
import OMDB from "../../Assets/Projects/OMDB.png";
import Smatbot from "../../Assets/Projects/Smatbot.png";
import timer from "../../Assets/Projects/Timer.png";
import stopwatch from "../../Assets/Projects/stopwatch.png";
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
              link="https://tictac-toe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OMDB}
              isBlog={false}
              title="OMDB"
              description="Used the movie database API from omdbapi and created an app where users can search details about different movies and get recommended tag for the higher rated movies."
              link="https://harshmehta813.github.io/movieOMDB/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timer}
              isBlog={false}
              title="Timer"
              description="A simple timer app where users can set the timer for desired seconds, pause it in between, play from the middle, & reset. Users also can start the timer from any desired time they want."
              link="https://simpletimer.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Smatbot}
              isBlog={false}
              title="Smatbot"
              description="Smatbot provides a facility to create a chatbot for all business needs."
              link="https://harshmehta813.github.io/smatbot/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="A todo app where users can add tasks, mark it as done, view completed tasks, change the status of tasks & delete the tasks."
              link="https://todo-page.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stopwatch}
              isBlog={false}
              title="Stopwatch"
              description="Stopwatch has mainly 3 functions; Start, Pause & Reset. In this app, users can start the stopwatch from zero secs, pause the stopwatch at anytime, resume from there & reset the stopwatch to zero."
              link="https://stopwatch-useeffect.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
