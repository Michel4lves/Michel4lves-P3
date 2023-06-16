import { Route, Routes } from "react-router-dom"

import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";





export default function PageRoutes({ avatar })  {
    return (
        <Routes>
            <Route path="/Michel4lves-P3/" element={<MainPage avatar={avatar} />} />
            <Route path="/Michel4lves-P3/sobre" element={<AboutPage />} /> 
            <Route path="/Michel4lves-P3/portfolio" element={<PortfolioPage />} /> 
            <Route path="/Michel4lves-P3/contato" element={<ContactPage />} /> 
        </Routes>
    )
}
