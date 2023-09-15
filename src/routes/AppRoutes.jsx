import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home';
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume"
import LoginPage from '../components/Auth/Pages/LoginPage';
import SignupPage from '../components/Auth/Pages/SignupPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    )
}

export default AppRoutes