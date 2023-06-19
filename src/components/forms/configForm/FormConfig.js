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


export default function FormConfig({ 
    onLogoChange, 
    onAvatarChange, 
    onColorFontChange, 
    onColorBgChange, 
    onColorBorderChange, 
    onColorHoverChange 
}) {

    const localConfigs = JSON.parse(localStorage.getItem('configs'))
    
    const [configActive, setConfigActive] = useState(false)
    const [logo, setLogo] = useState(localConfigs.logoSrc)
    const [avatar, setAvatar] = useState(localConfigs.avatarSrc)
    const [colorFont, setColorFont] = useState(localConfigs.colorFont)
    const [colorBg, setColorBg] = useState(localConfigs.colorBg)
    const [colorBorder, setColorBorder] = useState(localConfigs.colorBorder)
    const [colorHover, setColorHover] = useState(localConfigs.colorHover)

    const [isYellow, setIsYellow] = useState(localConfigs.isYellow)
    
    function menuConfigToggle() {
        setConfigActive(!configActive)
    }

    function colorChange(e) {
        const colorName = e.target.id

        switch (colorName) {
            case 'blue':
                setLogo(logoBl)
                setAvatar(meBl)
                setColorFont('fontBlue')
                setColorBg('bgBlue')
                setColorBorder('borderBlue')
                setColorHover('hoverBlue')
                onLogoChange(logoBl)
                onAvatarChange(meBl)
                onColorFontChange('fontBlue')
                onColorBgChange('bgBlue')
                onColorBorderChange('borderBlue')
                onColorHoverChange('hoverBlue')
                
                setIsYellow(false)
                break
            case 'green':
                setLogo(logoGr)
                setAvatar(meGr)
                setColorFont('fontGreen')
                setColorBg('bgGreen')
                setColorBorder('borderGreen')
                setColorHover('hoverGreen')
                onLogoChange(logoGr)
                onAvatarChange(meGr)
                onColorFontChange('fontGreen')
                onColorBgChange('bgGreen')
                onColorBorderChange('borderGreen')
                onColorHoverChange('hoverGreen')

                setIsYellow(false)
            break
            case 'orange':
                setLogo(logoOr)
                setAvatar(meOr)
                setColorFont('fontOrange')
                setColorBg('bgOrange')
                setColorBorder('borderOrange')
                setColorHover('hoverOrange')
                onLogoChange(logoOr)
                onAvatarChange(meOr)
                onColorFontChange('fontOrange')
                onColorBgChange('bgOrange')
                onColorBorderChange('borderOrange')
                onColorHoverChange('hoverOrange')

                setIsYellow(false)
                break
            case 'purple':
                setLogo(logoPu)
                setAvatar(mePu)
                setColorFont('fontPurple')
                setColorBg('bgPurple')
                setColorBorder('borderPurple')
                setColorHover('hoverPurple')
                onLogoChange(logoPu)
                onAvatarChange(mePu)
                onColorFontChange('fontPurple')
                onColorBgChange('bgPurple')
                onColorBorderChange('borderPurple')
                onColorHoverChange('hoverPurple')
                setIsYellow(false)
                break
            case 'red':
                setLogo(logoRd)
                setAvatar(meRd)
                setColorFont('fontRed')
                setColorBg('bgRed')
                setColorBorder('borderRed')
                setColorHover('hoverRed')
                onLogoChange(logoRd)
                onAvatarChange(meRd)
                onColorFontChange('fontRed')
                onColorBgChange('bgRed')
                onColorBorderChange('borderRed')
                onColorHoverChange('hoverRed')

                setIsYellow(false)
                // setSecondaryFont('var(--font-wt)')
                break
            case 'yellow':
                setLogo(logoYe)
                setAvatar(meYe)
                setColorFont('fontYellow')
                setColorBg('bgYellow')
                setColorBorder('borderYellow')
                setColorHover('hoverYellow')
                onLogoChange(logoYe)
                onAvatarChange(meYe)
                onColorFontChange('fontYellow')
                onColorBgChange('bgYellow')
                onColorBorderChange('borderYellow')
                onColorHoverChange('hoverYellow')

                setIsYellow(true)
                // setSecondaryFont('var(--font-bl)')
                break
            default:
                return ''
        }
        
    }
    
    localConfigs.logoSrc = logo
    localConfigs.avatarSrc = avatar

    localConfigs.colorFont = colorFont
    localConfigs.colorBg = colorBg
    localConfigs.colorBorder = colorBorder
    localConfigs.colorHover = colorHover

    localConfigs.isYellow = isYellow
    localStorage.setItem('configs', JSON.stringify(localConfigs))

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

