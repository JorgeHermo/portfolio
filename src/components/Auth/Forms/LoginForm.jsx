import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/auth.context"
import authService from "../../../services/auth.services"
import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                authenticateUser()
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const { password, email } = loginData

    return (
        <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Login</Button>
            </div>

        </Form>
    )
}

export default LoginForm