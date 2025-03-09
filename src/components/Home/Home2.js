import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              WHY YOU SHOULD <span className="purple"> HIRE ME </span>
            </h1>
            <p className="home-about-body">
              I am a dedicated and results-driven developer who believes in
              continuous growth and improvement with every step.
              <br />
              <br />I specialize in
              <i>
                <b className="purple"> React.js, Laravel, and JavaScript, </b>
              </i>
              building scalable and high-performance web applications.
              <br />
              <br />
              My expertise lies in developing client-focused solutions using
              various
              <i>
                <b className="purple">Web Technologies</b>
              </i>
              , ensuring seamless user experiences.
              <br />
              <br />I am also passionate about backend development and love
              creating robust products using
              <b className="purple"> Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              , including
              <i>
                <b className="purple"> Next.js, Angular, and Vue.js.</b>
              </i>
              <br />
              <br />
              With a strong problem-solving mindset and hands-on experience, I
              am confident in delivering efficient and scalable solutions that
              drive business success.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yonas8989"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yonas-fikadie-6a7093212?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmEwzDhiTTE%2B9NpjeM1zrKA%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
