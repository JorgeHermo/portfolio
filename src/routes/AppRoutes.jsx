import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home';
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    )
}

export default AppRoutes