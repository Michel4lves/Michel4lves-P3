import './SkillsCard.css'
import Skill from './skills/Skill'

export default function SkillsCard({ colorFontSet }) {

    return (
        <div className='skillBx'>
            <Skill colorFontSet={colorFontSet} skillClass="Html" />
            <Skill colorFontSet={colorFontSet} skillClass="Css" />
            <Skill colorFontSet={colorFontSet} skillClass="Javascript" />
            <Skill colorFontSet={colorFontSet} skillClass="React" />
            <Skill colorFontSet={colorFontSet} skillClass="Sass" />
            <Skill colorFontSet={colorFontSet} skillClass="Jquery" />
            <Skill colorFontSet={colorFontSet} skillClass="Git" />
            <Skill colorFontSet={colorFontSet} skillClass="Python" />
        </div>
    )
}