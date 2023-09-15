import SignupForm from "../Forms/SignupForm"
import { Container, Row, Col } from "react-bootstrap"

const SignupPage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Signup</h1>
                    <hr />
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage