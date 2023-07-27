import { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle/Particle";
import pdfENG from "../../Assets/CV-Jorge-Hermo-2023-ENG.pdf";
import pdfES from "../../Assets/CV-Jorge-Hermo-2023-ES.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from 'react-i18next';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [width, setWidth] = useState(1200);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    const pdf = i18n.language === 'en' ? pdfENG : pdfES;

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;{t('resume.download')}
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;{t('resume.download')}
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default Resume;
