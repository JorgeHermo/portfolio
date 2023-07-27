import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import Techstack from "./TechStack";
// import laptopImg from "../../Assets/";
import Toolstack from "./Toolstack";
import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation();
  
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            {t('about.about_greeting')} <strong className="purple">{t('about.about_greeting2')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
        <h1 className="project-heading">
        {t('about.skils')} <strong className="purple">{t('about.skils2')} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t('about.tools')}</strong> {t('about.tools2')}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
