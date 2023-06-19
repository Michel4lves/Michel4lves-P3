import './Navbar.css'
import LogoButton from '../buttons/LogoButton'
import NavButton from '../buttons/NavButton'
import ExitButton from '../buttons/ExitButton'
import NavMenu from './menu/NavMenu'
import DarkModeSwitch from '../switches/DarkModeSwitch'
import { useState } from 'react'


export default function Navbar({ logoSrc, activeTransition, colorFontSet, colorBgSet, colorBorderSet, colorHoverSet }) {

    const [isActive, setIsActive] = useState(false)
    const [activeClass, setActiveClass] = useState('')

        
    function menuToggle() {
        setIsActive(!isActive)
        if (!isActive) {
            setActiveClass('menuActive')
        }else{
            setActiveClass('')
        }
    }

    function noActive(activeClass) {
        setIsActive(false)
        setActiveClass(activeClass)
    }


    return (
        <nav>
            <div className='logo'>
                <LogoButton 
                    logoSrc={logoSrc} 
                    onActiveTransition={activeTransition} 
                />
            </div>
            <div className='dm-switch'>
                <DarkModeSwitch 
                    colorBgSet={colorBgSet} 
                    colorBorderSet={colorBorderSet} 
                />
            </div>
            <div>
                <NavMenu 
                    activeClass={activeClass} 
                    onCloseMenu={noActive} 
                    onActiveTransition={activeTransition} 
                    colorFontSet={colorFontSet}
                    
                />
            </div>
            <div className='menu-button' onClick={menuToggle}>
                {isActive ? 
                    <ExitButton colorFontSet={colorFontSet} /> : 
                    <NavButton colorBgSet={colorBgSet} />
                }
            </div>
        </nav>
    )
}