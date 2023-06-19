import './Scroll.css'
// import { useState } from 'react'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Scroll({ colorBgSet }) {

    
    const [height, setHeight] = useState(0)

    const navigate = useNavigate();
    
    useEffect(() => {
        setHeight(0);
        document.onscroll = function() {
            let totalHeight = document.documentElement.scrollHeight - window.innerHeight
            let progress = window.pageYOffset / (totalHeight / 100)
            setHeight(progress)

    //         const localConfigs = JSON.parse(localStorage.getItem('configs'))
    //         if (window.pageYOffset > 0) {
    //             if (localConfigs.darkMode) {
    //                 document.styleSheets[2].cssRules[0].style.background = 'var(--glassMenu-dm)'
    //             }else{
    //                 document.styleSheets[2].cssRules[0].style.background = 'var(--glassMenu)'
    //             }
    //         }else{
    //             document.styleSheets[2].cssRules[0].style.background = 'transparent'
    //         }
        }
    }, [navigate]);
    

    return (
        <>
            <div className={`${"progressBar"} ${colorBgSet}`} id="progressBar" style={{height:`${height}%`}}></div>
            <div id="scrollPath"></div>
        </>
    )
}