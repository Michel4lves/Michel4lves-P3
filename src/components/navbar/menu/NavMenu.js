import './NavMenu.css'
import { Link } from 'react-router-dom'

export default function NavMenu({ activeClass, onCloseMenu, onActiveTransition, colorFontSet }) {

    function closeMenu() {
        onCloseMenu('')
        onActiveTransition("on-transition")
    }


    return (
        <div className={`${"nav-menu"} ${activeClass}`}>
            <ul>
                <li className={colorFontSet} data-text="Início" onClick={closeMenu}>
                    <Link to="/michel4lves-p3/" id="menuIntro" className={`${"menu-list"} ${colorFontSet}`}>Início</Link>
                    {/* <Link to="/michel4lves-p3/" id="menuIntro" className={`${"menu-list"} ${"color-font-set-a"}`}>Início</Link> */}
                </li>
                <li className={colorFontSet} data-text="Sobre mim" onClick={closeMenu}>
                    <Link to="/michel4lves-p3/sobre" id="menuAbout" className={`${"menu-list"} ${colorFontSet}`}>Sobre mim</Link>
                </li>
                <li className={colorFontSet} data-text="Portfolio" onClick={closeMenu}>
                    <Link to="/michel4lves-p3/portfolio" id="menuPortfolio" className={`${"menu-list"} ${colorFontSet}`}>Portfolio</Link>
                </li>
                <li className={colorFontSet} data-text="Contato" onClick={closeMenu}>
                    <Link to="/michel4lves-p3/contato" id="menuContact" className={`${"menu-list"} ${colorFontSet}`}>Contato</Link>
                </li>
            </ul>
        </div>
    )
}