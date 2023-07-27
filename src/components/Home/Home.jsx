import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/homeLogo";
import Particle from "../Particle/Particle";
import Home2 from "./Home2"
import Type from "./Type";
import { useTranslation } from 'react-i18next';

function Home() {

  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              {t('home.home_greeting')}{" "}
              </h1>

              <h1 className="heading-name">
                {t('home.im')}
                <strong className="main-name"> JORGE HERMO TORRADO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}> TODO Creat a logo ASAP
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
