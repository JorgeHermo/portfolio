import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';

const AboutCard = () => {

  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('about2.about_greeting')} <span className="purple">Jorge Hermo </span>
            {t('about2.from')} <span className="purple"> {t('about2.birthe_place')}</span>
            <br /> {t('about2.about_my_self')}
            <br />
            {t('about2.about_my_self2')}
            <br />
            <br />
            {t('about2.about_my_self3')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('about2.interests')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about2.interests2')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about2.interests3')}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          {t('about2.note')}{" "}
          </p>
          <footer className="blockquote-footer">Jorge</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
