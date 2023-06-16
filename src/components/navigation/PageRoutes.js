import { Route, Routes } from "react-router-dom"

import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";





export default function PageRoutes({ avatar })  {
    return (
        <Routes>
            <Route path="/michel4lves-p3/" element={<MainPage avatar={avatar} />} />
            <Route path="/michel4lves-p3/sobre" element={<AboutPage />} /> 
            <Route path="/michel4lves-p3/portfolio" element={<PortfolioPage />} /> 
            <Route path="/michel4lves-p3/contato" element={<ContactPage />} /> 
        </Routes>
    )
}
