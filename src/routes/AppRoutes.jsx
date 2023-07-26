import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home';
import About from "../components/About/About";
import Projects from "../components/Projects/Projects"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
        </Routes>
    )
}

export default AppRoutes