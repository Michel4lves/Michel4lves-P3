import "./components/configs/configColors.css"

import { BrowserRouter } from "react-router-dom"
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Container from "./components/container/Container";
import PageRoutes from "./components/navigation/PageRoutes";
import Scroll from "./components/scroll/Scroll";
import FormConfig from "./components/forms/configForm/FormConfig";
import Transition from "./components/transitions/Transition";

import logoBl from './img/logos/logo-az.png'
import meBl from './img/avatar/eu-az.png'


export default function App() {

    const config = {
        "logoSrc": "logoBl",
        "avatarSrc": "meBl",
        "colorFont": "fontBlue",
        "colorBg": "bgBlue",
        "colorBorder": "borderBlue",
        "colorHover": "hoverBlue",
        "darkMode": false,
        "isYellow": false
    }

    if (!localStorage.hasOwnProperty('configs')) {
        localStorage.setItem('configs', JSON.stringify(config))
    }

    const localConfigs = JSON.parse(localStorage.getItem('configs'))

    const initialLogo = (localConfigs.logoSrc !== "logoBl") ? localConfigs.logoSrc : logoBl
    const [logoSrc, setLogoSrc] = useState(initialLogo)
    function handleLogoChange(newLogoSrc) {
        setLogoSrc(newLogoSrc)
    }

    const initialAvatar = (localConfigs.avatarSrc !== "meBl") ? localConfigs.avatarSrc : meBl
    const [avatarSrc, setAvatarSrc] = useState(initialAvatar)
    function handleAvatarChange(newAvatarSrc) {
        setAvatarSrc(newAvatarSrc)
    }

    const initialColorFont = localConfigs.colorFont
    const [colorFont, setColorFont] = useState(initialColorFont)
    function handleColorFontChange(newColorFont) {
        setColorFont(newColorFont)
    }

    const initialColorBg = localConfigs.colorBg
    const [colorBg, setColorBg] = useState(initialColorBg)
    function handleColorBgChange(newColorBg) {
        setColorBg(newColorBg)
    }

    const initialColorBorder = localConfigs.colorBorder
    const [colorBorder, setColorBorder] = useState(initialColorBorder)
    function handleColorBorderChange(newColorBorder) {
        setColorBorder(newColorBorder)
    }

    const initialColorHover = localConfigs.colorHover
    const [colorHover, setColorHover] = useState(initialColorHover)
    function handleColorHoverChange(newColorHover) {
        setColorHover(newColorHover)
    }

    const initialThemeMode = localConfigs.darkMode ? "dark" : ""
    const [themeMode, setThemeMode] = useState(initialThemeMode)
    function handleDarkModeChange(newthemeMode) {
        setThemeMode(newthemeMode)
    }
    console.log(themeMode)


    function eyeBall(event) {
        var eye = document.querySelectorAll('.eye');
        eye.forEach(function(eye){
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = (radian * (180 / Math.PI) * -1) + 90;
            eye.style.transform = "rotate("+ rot +"deg)";
        })
    }


    const [isTransition, setIsTransition] = useState('')
    function activeTransition(activatedTransition) {
        setIsTransition(activatedTransition)
        setTimeout(() => {
            setIsTransition('')
        }, 1500)
    }


    return (
        <div className={`${"App"} ${themeMode}`} onMouseMove={eyeBall}>
            <BrowserRouter>
                <Navbar 
                    logoSrc={logoSrc} 
                    activeTransition={activeTransition}
                    colorFontSet={colorFont} 
                    colorBgSet={colorBg} 
                    colorBorderSet={colorBorder} 
                    onDarkMode={handleDarkModeChange}
                    themeModeSet={themeMode}
                />
                <Container>
                    <Scroll colorBgSet={colorBg} />
                    <PageRoutes 
                        avatar={avatarSrc} 
                        colorFontSet={colorFont} 
                        colorBgSet={colorBg} 
                        colorBorderSet={colorBorder} 
                        colorHoverSet={colorHover} 
                        themeModeSet={themeMode}
                    />
                    <FormConfig 
                        onLogoChange={handleLogoChange} 
                        onAvatarChange={handleAvatarChange} 
                        onColorFontChange={handleColorFontChange} 
                        onColorBgChange={handleColorBgChange} 
                        onColorBorderChange={handleColorBorderChange} 
                        onColorHoverChange={handleColorHoverChange} 
                    />
                </Container>
                <Transition onTransition={isTransition} colorBgSet={colorBg} />
            </BrowserRouter>
        </div>
    );
}
