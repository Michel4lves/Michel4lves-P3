import './FormConfig.css'
import { useState } from 'react';

import { GiGearHammer } from "react-icons/gi";

import logoBl from '../../../img/logos/logo-az.png'
import logoGr from '../../../img/logos/logo-vd.png'
import logoOr from '../../../img/logos/logo-la.png'
import logoPu from '../../../img/logos/logo-rx.png'
import logoRd from '../../../img/logos/logo-vm.png'
import logoYe from '../../../img/logos/logo-am.png'

import meBl from '../../../img/avatar/eu-az.png'
import meGr from '../../../img/avatar/eu-vd.png'
import meOr from '../../../img/avatar/eu-la.png'
import mePu from '../../../img/avatar/eu-rx.png'
import meRd from '../../../img/avatar/eu-vm.png'
import meYe from '../../../img/avatar/eu-am.png'





export default function FormConfig({ onLogoChange, onAvatarChange }) {
    const localConfigs = JSON.parse(localStorage.getItem('configs'))
    
    const [configActive, setConfigActive] = useState(false)
    const [color, setColor] = useState(localConfigs.color)
    const [logo, setLogo] = useState(localConfigs.logoSrc)
    const [avatar, setAvatar] = useState(localConfigs.avatarSrc)
    const [isYellow, setIsYellow] = useState(localConfigs.isYellow)
    const [secondaryFont, setSecondaryFont] = useState('var(--font-wt)')
    
    function menuConfigToggle() {
        setConfigActive(!configActive)
    }

    function colorChange(e) {
        const colorName = e.target.id

        switch (colorName) {
            case 'blue':
                setColor('var(--blue)')
                setLogo(logoBl)
                setAvatar(meBl)
                onLogoChange(logoBl)
                onAvatarChange(meBl)
                setIsYellow(false)
                setSecondaryFont('var(--font-wt)')
                break
            case 'green':
                setColor('var(--green)')
                setLogo(logoGr)
                setAvatar(meGr)
                onLogoChange(logoGr)
                onAvatarChange(meGr)
                setIsYellow(false)
                setSecondaryFont('var(--font-wt)')
            break
            case 'orange':
                setColor('var(--orange)')
                setLogo(logoOr)
                setAvatar(meOr)
                onLogoChange(logoOr)
                onAvatarChange(meOr)
                setIsYellow(false)
                setSecondaryFont('var(--font-wt)')
                break
            case 'purple':
                setColor('var(--purple)')
                setLogo(logoPu)
                setAvatar(mePu)
                onLogoChange(logoPu)
                onAvatarChange(mePu)
                setIsYellow(false)
                setSecondaryFont('var(--font-wt)')
                break
            case 'red':
                setColor('var(--red)')
                setLogo(logoRd)
                setAvatar(meRd)
                onLogoChange(logoRd)
                onAvatarChange(meRd)
                setIsYellow(false)
                setSecondaryFont('var(--font-wt)')
                break
            case 'yellow':
                setColor('var(--yellow)')
                setLogo(logoYe)
                setAvatar(meYe)
                onLogoChange(logoYe)
                onAvatarChange(meYe)
                setIsYellow(true)
                setSecondaryFont('var(--font-bl)')
                break
            default:
                return ''
        }
        
    }
    
    localConfigs.color = color
    localConfigs.logoSrc = logo
    localConfigs.avatarSrc = avatar
    localConfigs.isYellow = isYellow
    localStorage.setItem('configs', JSON.stringify(localConfigs))

    // COLORS
    document.styleSheets[1].cssRules[4].style.color = localConfigs.color
    document.styleSheets[1].cssRules[5].style.color = localConfigs.color
    document.styleSheets[1].cssRules[7].style.color = localConfigs.color
    document.styleSheets[1].cssRules[8].style.background = localConfigs.color
    document.styleSheets[1].cssRules[9].style.background = `linear-gradient(0deg, ${localConfigs.color} 50%, transparent)`
    document.styleSheets[1].cssRules[10].style.border = `1px solid ${localConfigs.color}`
    document.styleSheets[1].cssRules[11].style.border = `2px solid ${localConfigs.color}`
    document.styleSheets[1].cssRules[12].style.border = `3px solid ${localConfigs.color}`
    document.styleSheets[1].cssRules[14].style.borderBottom = `2px solid ${localConfigs.color}`
    document.styleSheets[1].cssRules[15].style.color = localConfigs.color

    document.styleSheets[19].cssRules[8].style.color = secondaryFont
    document.styleSheets[20].cssRules[0].style.color = secondaryFont
    document.styleSheets[20].cssRules[2].style.color = secondaryFont
    document.styleSheets[21].cssRules[3].style.color = secondaryFont


    return (
        <div className={`${"config"} ${(configActive) ? "accessUp" : ""}`}>
            <div className="icon" onClick={menuConfigToggle}><GiGearHammer /></div>
            <div className="colorBx">
                <h3>Outras Cores</h3>
                <div className="colors">
                    <div className={`${"blue"} ${"color-page"}`} id="blue" onClick={colorChange}></div>
                    <div className={`${"green"} ${"color-page"}`} id="green" onClick={colorChange}></div>
                    <div className={`${"orange"} ${"color-page"}`} id="orange" onClick={colorChange}></div>
                    <div className={`${"purple"} ${"color-page"}`} id="purple" onClick={colorChange}></div>
                    <div className={`${"red"} ${"color-page"}`} id="red" onClick={colorChange}></div>
                    <div className={`${"yellow"} ${"color-page"}`} id="yellow" onClick={colorChange}></div>
                </div>
            </div>
        </div>
    )
}















// import './FormConfig.css'
// import { useState } from 'react';

// import { GiGearHammer } from "react-icons/gi";

// import logoBl from '../../../img/logos/logo-az.png'
// import logoGr from '../../../img/logos/logo-vd.png'
// import logoOr from '../../../img/logos/logo-la.png'
// import logoPu from '../../../img/logos/logo-rx.png'
// import logoRd from '../../../img/logos/logo-vm.png'
// import logoYe from '../../../img/logos/logo-am.png'
// // import meBl from '../../../img/avatar/eu-az.png'
// // import meGr from '../../../img/avatar/eu-vd.png'
// // import meOr from '../../../img/avatar/eu-la.png'
// // import mePu from '../../../img/avatar/eu-rx.png'
// // import meRd from '../../../img/avatar/eu-vm.png'
// // import meYe from '../../../img/avatar/eu-am.png'


// export default function FormConfig() {
//     const localConfigs = JSON.parse(localStorage.getItem('configs'))
    
//     const [configActive, setConfigActive] = useState(false)
//     const [color, setColor] = useState(localConfigs.color)
//     const [logo, setLogo] = useState(localConfigs.logoSrc)
    
//     function menuConfigToggle() {
//         setConfigActive(!configActive)
//     }

//     function colorChange(e) {
//         const colorName = e.target.id

//         switch (colorName) {
//             case 'blue':
//                 setColor('var(--blue)')
//                 setLogo(logoBl)
//                 break
//             case 'green':
//                 setColor('var(--green)')
//                 setLogo(logoGr)
//                 break
//             case 'orange':
//                 setColor('var(--orange)')
//                 setLogo(logoOr)
//                 break
//             case 'purple':
//                 setColor('var(--purple)')
//                 setLogo(logoPu)
//                 break
//             case 'red':
//                 setColor('var(--red)')
//                 setLogo(logoRd)
//                 break
//             case 'yellow':
//                 setColor('var(--yellow)')
//                 setLogo(logoYe)
//                 break
//             default:
//                 return ''
//         }
//     }
    
//     localConfigs.color = color
//     localConfigs.logoSrc = logo
//     localStorage.setItem('configs', JSON.stringify(localConfigs))

//     // COLORS
//     document.styleSheets[1].cssRules[4].style.color = localConfigs.color
//     document.styleSheets[1].cssRules[5].style.color = localConfigs.color
//     document.styleSheets[1].cssRules[7].style.color = localConfigs.color
//     document.styleSheets[1].cssRules[8].style.background = localConfigs.color
//     document.styleSheets[1].cssRules[9].style.background = `linear-gradient(0deg, ${localConfigs.color} 50%, transparent)`
//     document.styleSheets[1].cssRules[10].style.border = `1px solid ${localConfigs.color}`
//     document.styleSheets[1].cssRules[11].style.border = `2px solid ${localConfigs.color}`
//     document.styleSheets[1].cssRules[12].style.border = `3px solid ${localConfigs.color}`
//     document.styleSheets[1].cssRules[14].style.borderBottom = `2px solid ${localConfigs.color}`
//     document.styleSheets[1].cssRules[15].style.color = localConfigs.color



//     return (
//         <div className={`${"config"} ${(configActive) ? "accessUp" : ""}`}>
//             <div className="icon" onClick={menuConfigToggle}><GiGearHammer /></div>
//             <div className="colorBx">
//                 <h3>Outras Cores</h3>
//                 <div className="colors">
//                     <div className={`${"blue"} ${"color-page"}`} id="blue" onClick={colorChange}></div>
//                     <div className={`${"green"} ${"color-page"}`} id="green" onClick={colorChange}></div>
//                     <div className={`${"orange"} ${"color-page"}`} id="orange" onClick={colorChange}></div>
//                     <div className={`${"purple"} ${"color-page"}`} id="purple" onClick={colorChange}></div>
//                     <div className={`${"red"} ${"color-page"}`} id="red" onClick={colorChange}></div>
//                     <div className={`${"yellow"} ${"color-page"}`} id="yellow" onClick={colorChange}></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

