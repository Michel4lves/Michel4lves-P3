import './MenuResponsivo.css'
import { Link } from 'react-router-dom'

export default function MenuResponsivo({ activeClass }) {

    return (
        <div className={`${"nav-menu"} ${activeClass ? "active" : ""}`}>
            <ul>
                <li data-text="Início">
                    <Link to="/" id="menuIntro" className="menu-list color-set">Início</Link>
                </li>
                <li data-text="Sobre mim">
                    <Link to="/sobre" id="menuAbout" className="menu-list color-set">Sobre mim</Link>
                </li>
                <li data-text="Portfolio">
                    <Link to="/portfolio" id="menuPortfolio" className="menu-list color-set">Portfolio</Link>
                </li>
                <li data-text="Contato">
                    <Link to="/contato" id="menuContact" className="menu-list color-set">Contato</Link>
                </li>
            </ul>
        </div>
    )
}