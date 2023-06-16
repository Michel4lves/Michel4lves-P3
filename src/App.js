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

    const config = {"color": "var(--blue)", "logoSrc": "logoBl", "avatarSrc": "meBl", "darkMode": false, "isYellow": false}

    if (!localStorage.hasOwnProperty('configs')) {
        localStorage.setItem('configs', JSON.stringify(config))
    }

    if (!localStorage.hasOwnProperty('configs')) {
        const localConfigs = JSON.parse(localStorage.getItem('configs'))
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


    const txtColorIfYellow = (localConfigs.isYellow) ? "var(--font-bl)" : "var(--font-wt)"

    document.styleSheets[19].cssRules[8].style.color = txtColorIfYellow
    document.styleSheets[20].cssRules[0].style.color = txtColorIfYellow
    document.styleSheets[20].cssRules[2].style.color = txtColorIfYellow
    document.styleSheets[21].cssRules[3].style.color = txtColorIfYellow


    const page = document.querySelector('body')
    if (localConfigs.darkMode) {
        page.style.background = 'var(--bg-dm)'
        page.style.color = 'var(--font-dm)'
        document.styleSheets[1].cssRules[6].style.color = 'var(--font-dm)'
        document.styleSheets[1].cssRules[13].style.borderBottom = '1px solid var(--bottom-ln-dm)'
        document.styleSheets[6].cssRules[9].cssRules[0].style.background = 'var(--bg-dm)'
        document.styleSheets[24].cssRules[3].style.color = 'var(--font-dm)'
    }else{
        page.style.background = 'var(--bg)'
        page.style.color = 'var(--font-bl)'
        document.styleSheets[1].cssRules[6].style.color = 'var(--font-bl)'
        document.styleSheets[1].cssRules[13].style.borderBottom = '1px solid var(--bottom-ln)'
        document.styleSheets[6].cssRules[9].cssRules[0].style.background = 'var(--bg)'
        document.styleSheets[24].cssRules[3].style.color = 'var(--font-bl)'
    }

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
        <div className="App" onMouseMove={eyeBall}>
            <BrowserRouter>
                <Navbar logoSrc={logoSrc} activeTransition={activeTransition} />
                <Container>
                    <Scroll />
                    <PageRoutes avatar={avatarSrc} />
                    <FormConfig onLogoChange={handleLogoChange} onAvatarChange={handleAvatarChange} />
                </Container>
                <Transition onTransition={isTransition} logoSrc={logoSrc} />
            </BrowserRouter>
        </div>
    );
}
