import './SkillsCard.css'
import Skill from './skills/Skill'

export default function SkillsCard() {

    return (
        <div className='skillBx'>
            <Skill skillClass="Html" />
            <Skill skillClass="Css" />
            <Skill skillClass="Javascript" />
            <Skill skillClass="React" />
            <Skill skillClass="Jquery" />
            <Skill skillClass="Git" />
            <Skill skillClass="Python" />
        </div>
    )
}