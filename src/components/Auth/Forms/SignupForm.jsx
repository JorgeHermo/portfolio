import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import authService from './../../../services/auth.services';

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: ""
    })

    const navigate = useNavigate()

    const { username, email, password } = signupData

    return
}