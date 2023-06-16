import './LogoButton.css'

import { Link } from 'react-router-dom'

export default function LogoButton({ logoSrc, onActiveTransition }) {

    function transition() {
        onActiveTransition("on-transition")
    }

    return (
        <>
            <Link to="/Michel4lves-P3/" id="menuIntro" className={`${"menu-list"} ${"color-font-set-a"}`}  onClick={transition}>
                <img className={`${"logo"} ${"color-set-logo"}`} src={logoSrc} alt="logo" id='logo'/>
            </Link>
        </>
    )
}





// import './LogoButton.css'

// import { Link } from 'react-router-dom'

// import logoBl from '../../img/logos/logo-az.png'

// export default function LogoButton() {

//     const localConfigs = JSON.parse(localStorage.getItem('configs'))
//     const logo = localConfigs.logoSrc


//     return (
//         <>
//             <Link to="/" id="menuIntro" className={`${"menu-list"} ${"color-font-set-a"}`}>
//                 <img className={`${"logo"} ${"color-set-logo"}`} src={(logo !== "logoBl") ? logo : logoBl} alt="logo" id='logo'/>
//             </Link>
//         </>
//     )
// }
