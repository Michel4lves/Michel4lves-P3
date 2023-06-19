import './DarkModeSwitch.css'
import { useState } from 'react'

export default function DarkModeSwitch({ colorBgSet, colorBorderSet, onDarkMode }) {

    const localConfigs = JSON.parse(localStorage.getItem('configs'))

    const [darkMode, setDarkMode] = useState(localConfigs.darkMode)
    const [isChecked, setIsChecked] = useState(darkMode);

    function toggleDarkMode() {
        if (!darkMode) {
            setDarkMode(true)
            onDarkMode("dark")
        }else{
            setDarkMode(false)
            onDarkMode('')
        }
    }

    function handleChange(event) {
        setIsChecked(event.target.checked);
    }

    localConfigs.darkMode = darkMode
    localStorage.setItem('configs', JSON.stringify(localConfigs))


    return (
        <div className="theme-switch">
            <label className={`${"theme"} ${colorBorderSet}`}>
                <input type="checkbox" className="theme-checkbox" onClick={toggleDarkMode} checked={isChecked} onChange={handleChange} />
                <span className="slider">
                    <span className={`${"light"} ${colorBorderSet}`}>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                        <span className={`${"light-part"} ${colorBgSet}`}></span>
                    </span>
                    <span className={`${"dark"} ${colorBgSet}`}>
                        <span className='dark-part'></span>
                    </span>
                </span>
            </label>
        </div> 
    )
}
