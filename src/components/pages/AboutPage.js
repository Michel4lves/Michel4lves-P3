import './AboutPage.css'
import perfil from '../../img/perfil/perfil.png'
import About from "../../components/presentation/About";
import SkillsCard from '../../components/cards/SkillsCard';

export default function AboutPage({ colorFontSet }) {
    return (
        <section className='about-container'>
            <h1>Sobre<span className={`${"me"} ${colorFontSet}`}>Mim</span></h1>
            <div className="aboutBx">
                <About colorFontSet={colorFontSet} />
                <img src={perfil} alt="perfil_photo"/>
            </div>
            <h1><span className={`${"me"} ${colorFontSet}`}>Minhas</span>Habilidades</h1>
            <SkillsCard colorFontSet={colorFontSet} />
        </section>
    )
}