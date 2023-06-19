import './LogoButton.css'

import { Link } from 'react-router-dom'

export default function LogoButton({ logoSrc, onActiveTransition }) {

    function transition() {
        onActiveTransition("on-transition")
    }

    return (
        <>
            <Link to="/michel4lves-p3/" id="menuIntro" className={`${"menu-list"} ${"color-font-set-a"}`}  onClick={transition}>
                <img className={`${"logo"}`} src={logoSrc} alt="logo" id='logo'/>
                {/* <img className={`${"logo"} ${"color-set-logo"}`} src={logoSrc} alt="logo" id='logo'/> */}
            </Link>
        </>
    )
}
