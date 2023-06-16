import { Route, Routes } from "react-router-dom"

import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";





export default function PageRoutes({ avatar })  {
    return (
        <Routes>
            <Route path="/" element={<MainPage avatar={avatar} />} />
            <Route path="/sobre" element={<AboutPage />} /> 
            <Route path="/portfolio" element={<PortfolioPage />} /> 
            <Route path="/contato" element={<ContactPage />} /> 
        </Routes>
    )
}
