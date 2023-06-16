import './DarkModeSwitch.css'
import { useState } from 'react'

export default function DarkModeSwitch() {

    const localConfigs = JSON.parse(localStorage.getItem('configs'))

    const [darkMode, setDarkMode] = useState(localConfigs.darkMode)
    const [isChecked, setIsChecked] = useState(darkMode);

    function toggleDarkMode() {
        setDarkMode(!darkMode)
    }

    function handleChange(event) {
        setIsChecked(event.target.checked);
    }

    localConfigs.darkMode = darkMode
    localStorage.setItem('configs', JSON.stringify(localConfigs))

    const page = document.querySelector('body')
    if (darkMode) {
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


    return (
        <div className="theme-switch">
            <label className={`${"theme"} ${"color-bdr-3"}`}>
                <input type="checkbox" className="theme-checkbox" onClick={toggleDarkMode} checked={isChecked} onChange={handleChange} />
                <span className="slider">
                    <span className={`${"light"} ${"color-bdr-1"}`}>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                        <span className={`${"light-part"} ${"color-bg-set"}`}></span>
                    </span>
                    <span className={`${"dark"} ${"color-bg-set"}`}>
                        <span className='dark-part'></span>
                    </span>
                </span>
            </label>
        </div> 
    )
}
