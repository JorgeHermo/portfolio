import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        form.current.reset();
    };

    return (
        <Form ref={form} onSubmit={sendEmail}>
            <Form.Group>
                <Form.Label>{t('contact.name')}</Form.Label>
                <Form.Control type="text" name="from_name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>{t('contact.email')}</Form.Label>
                <Form.Control type="email" name="from_email" />
            </Form.Group>

            <Form.Group>
                <Form.Label>{t('contact.content')}</Form.Label>
                <Form.Control as="textarea" name="message" />
            </Form.Group>

            <Button variant="primary" type="submit">
            {t('contact.submit')}
            </Button>
        </Form>
    );
}

export default Contact;