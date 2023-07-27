import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/"; TODO Get a proper avatar ASAP
import Tilt from "react-parallax-tilt";
import { AiFillGithub, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Home2 = () => {

  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            {t('home2.intro1')} <span className="purple"> {t('home2.intro2')} </span> {t('home2.intro3')}
            </h1>
            <p className="home-about-body">
            {t('home2.intro4')}
              <br />
              <br />{t('home2.intro5')}
              <i>
                <b className="purple"> {t('home2.intro6')} </b>
              </i>
              <br />
              <br />
              {t('home2.intro7')} &nbsp;
              <i>
                <b className="purple">{t('home2.intro8')}</b>
              </i>
              <br />
              <br />
              {t('home2.intro9')} <b className="purple">{t('home2.intro10')}</b> {t('home2.intro11')}
              <i>
                <b className="purple">
                  {" "}
                  {t('home2.intro12')}
                </b>
              </i>
              &nbsp; {t('home2.intro13')}
              <i>
                <b className="purple">{t('home2.intro14')}</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={get an image ASAP} className="img-fluid" alt="avatar" /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t('home2.intro15')}</h1>
            <p>
            {t('home2.intro16')} <span className="purple">{t('home2.intro17')} </span>{t('home2.intro18')}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JorgeHermo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jorge-hermo-torrado/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
