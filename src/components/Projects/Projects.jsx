import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle/Particle";
import MasterFP from "../../Assets/MasterFP.png";
import Almacen from "../../Assets/AlmacenBPO.png";
import Mobility from "../../Assets/MobilityCity.png";

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
                            imgPath={MasterFP}
                            isBlog={false}
                            title="Hot To Code Client"
                            description={
                                <span>
                                    Social Media meant for developers to share code snippets and collaborate on snippets with a text editor in real time, built with React.js, Node.js, socket.io and MongoDB. Created in partnership with my bootcamp colleague and friend, Santiago Moncada.
                                    <br />
                                    <span style={{ color: 'orange' }}>Server under maintenance</span>
                                </span>
                            }

                            ghLink="https://github.com/JorgeHermo/HotToCode-Client"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={MasterFP}
                            isBlog={false}
                            title="Hot To Code Server"
                            description={
                                <span>
                                    Social Media meant for developers to share code snippets and collaborate on snippets with a text editor in real time, built with React.js, Node.js, socket.io and MongoDB. Created in partnership with my bootcamp colleague and friend, Santiago Moncada.
                                    <br />
                                    <span style={{ color: 'orange' }}>Server under maintenance</span>
                                </span>
                            }

                            ghLink="https://github.com/JorgeHermo/HotToCode-Server"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Almacen}
                            isBlog={false}
                            title="Almacen BPO"
                            description={
                                <span>
                                    Almacen BPO is a stock management application developed for Secuoya Content Group's BPO division. Built on Laravel and MySQL, this app provides efficient inventory control and optimization, enhancing productivity for the organization.
                                    <br />
                                    <span style={{ color: 'orange' }}> Please note that the project's repository is not publicly available due to its proprietary nature.</span>
                                </span>
                            }
                            ghLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Mobility}
                            isBlog={false}
                            title="Mobility City Visitantes "
                            description={
                                <span>
                                    Guided tour visit application made with React.js and WordPress for the Mobility City Museum in Zaragoza, Spain.
                                    <br />
                                    <span style={{ color: 'orange' }}> Please note that the project's repository is not publicly available due to its proprietary nature.</span>
                                </span>
                            }
                            ghLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
