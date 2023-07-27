import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle/Particle";
import MasterFP from "../../Assets/MasterFP.png";
import Almacen from "../../Assets/AlmacenBPO.png";
import Mobility from "../../Assets/MobilityCity.png";
import { useTranslation } from 'react-i18next';

function Projects() {

    const { t } = useTranslation();

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                {t('project.intro')} <strong className="purple">{t('project.intro2')} </strong>
                </h1>
                <p style={{ color: "white" }}>
                {t('project.intro3')}
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={MasterFP}
                            isBlog={false}
                            title="Hot To Code Client"
                            description={
                                <span>
                                    {t('project.project1')}
                                    <br />
                                    <span style={{ color: 'orange' }}>{t('project.project_warning')}</span>
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
                                    {t('project.project2')}
                                    <br />
                                    <span style={{ color: 'orange' }}>{t('project.project_warning')}</span>
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
                                    {t('project.project3')}
                                    <br />
                                    <span style={{ color: 'orange' }}> {t('project.project_warning2')}</span>
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
                                    {t('project.project4')}
                                    <br />
                                    <span style={{ color: 'orange' }}> {t('project.project_warning2')}</span>
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
