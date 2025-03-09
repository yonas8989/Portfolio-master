import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Ride-sharing"
              description="A ride-Sharing wesite serves as seamless platform connection drives with passengers looking for convenient affordable transportation option the site freatures a sleek , intuitive desing with straignforward navigation, enabling users to quickly request rides or offer their driving services"
              ghLink="https://github.com/yonas8989/ride-master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pharmacy Management App"
              description="A Pharmacy Management App is a digital solution designed to streamline pharmacy operations, including inventory management, prescription processing, sales tracking, and customer management. It enhances efficiency, reduces errors, and ensures seamless communication between pharmacists, suppliers, and customers."
              ghLink="https://github.com/yonas8989/PharmacyMS-Laravel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sales Order Management System"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/yonas8989/orms"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Clinic Mangement System"
              description="The Clinic Management System is a web-based application designed to streamline patient registration, appointment scheduling, medical records management, and billing. It enhances efficiency for healthcare providers by automating administrative tasks and improving patient care."
              ghLink="https://github.com/yonas8989/Clinic-ms"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ecommerce Website"
              description="An eCommerce website is an online platform that allows businesses to sell products or services digitally, enabling customers to browse, add items to a cart, and make secure payments. It streamlines the buying and selling process with features like product catalogs, order management, and customer support."
              ghLink="https://github.com/yonas8989/laravel-vue-ecommerce-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Project Management App"
              description="A project management website is an online platform that helps teams plan, track, and collaborate on projects efficiently. It includes features like task assignment, progress tracking, file sharing, and team communication to enhance productivity and ensure project success."
              ghLink="https://github.com/yonas8989/project-management-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
