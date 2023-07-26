import { Routes, Route } from 'react-router-dom'
import About from "../components/About/About";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default AppRoutes