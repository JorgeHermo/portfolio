import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiMacos,
    SiWindows,
} from "react-icons/si";

const Toolstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
            </Col>
        </Row>
    );
}

export default Toolstack;
