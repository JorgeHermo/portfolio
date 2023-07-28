import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copyright">
                    <h3>Developed by Jorge Hermo</h3>
                </Col>
                <Col md="4" className="footer-copyright">
                    Copyright © {year} Jorge Hermo
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/JorgeHermo"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/jorge-hermo-torrado/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer