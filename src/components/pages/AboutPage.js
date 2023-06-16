import './AboutPage.css'
import perfil from '../../img/perfil/perfil.png'
import About from "../../components/presentation/About";
import SkillsCard from '../../components/cards/SkillsCard';

export default function AboutPage() {
    return (
        <section className='about-container'>
            <h1>Sobre<span className={`${"me"} ${"color-font-set"}`}>Mim</span></h1>
            <div className="aboutBx">
                <About />
                <img src={perfil} alt="perfil_photo"/>
            </div>
            <h1><span className={`${"me"} ${"color-font-set"}`}>Minhas</span>Habilidades</h1>
            <SkillsCard />
        </section>
    )
}