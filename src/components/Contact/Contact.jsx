import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {

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
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="from_name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" name="from_email" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    );
}

export default Contact;