import './SkillColors.css'
import Tilt from 'react-parallax-tilt'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiPython, DiJqueryLogo, DiGit } from "react-icons/di"
import SkillKnowledge from './SkillKnowledge'
import GradientDiPython from './GradientDiPython'

export default function Skill({ skillClass, colorFontSet }) {
    
    const skillType = () => {
        switch (skillClass) {
            case 'Html':
                return <DiHtml5 className={`${"skill-logo"} ${colorFontSet}`}/>
            case 'Css':
                return <DiCss3 className={`${"skill-logo"} ${colorFontSet}`}/>
            case 'Javascript':
                return <DiJsBadge className={`${"skill-logo"} ${colorFontSet}`}/>
            case 'React':
                return <DiReact className={`${"skill-logo"} ${colorFontSet}`}/>
            case 'Jquery':
                return <DiJqueryLogo className={`${"skill-logo"} ${colorFontSet}`}/>
            case 'Git':
                return <DiGit className={`${"skill-logo"} ${colorFontSet}`}/>
            case 'Python':
                return <DiPython className={`${"skill-logo"} ${colorFontSet}`}/>
            default:
                return "";
        }
    }

    const skillTypeColor = () => {
        switch (skillClass) {
            case 'Html':
                return <DiHtml5 className={`${"skill-logo-hover"} ${skillClass}`}/>
            case 'Css':
                return <DiCss3 className={`${"skill-logo-hover"} ${skillClass}`}/>
            case 'Javascript':
                return <DiJsBadge className={`${"skill-logo-hover"} ${skillClass}`}/>
            case 'React':
                return <DiReact className={`${"skill-logo-hover"} ${skillClass}`}/>
            case 'Jquery':
                return <DiJqueryLogo className={`${"skill-logo-hover"} ${skillClass}`}/>
            case 'Git':
                return <DiGit className={`${"skill-logo-hover"} ${skillClass}`}/>
            case 'Python':
                return <GradientDiPython className={`${"skill-logo-hover"} ${skillClass}`}/>
            default:
                return "";
        }
    }


    return (
        <>
            <Tilt options={{
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 1,
                "glare-prerender": false
            }}
            >
                <div className="skill-card">
                    <div className="skill-img-bx">
                        <>{skillTypeColor()}</>     {/* <DiHtml5 className={`${"skill-logo-hover"} ${skillClass}`}/> */}
                    </div>
                    <div className="skill-content">
                        <>{skillType()}</>     {/* <DiHtml5 className={`${"skill-logo"} ${colorFontSet}`}/> */}
                        <h3 id={skillClass} className={colorFontSet}>{skillClass}</h3>
                        <SkillKnowledge skillName={skillClass} />
                    </div>
                </div>
            </Tilt>
        </>
    )
}
