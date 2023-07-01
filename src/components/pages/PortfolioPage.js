import './PortfolioPage.css'
import { useState } from 'react';

import JobCard from "../cards/JobCard";
import GlassButton from '../../components/buttons/GlassButton';
import GitHubAccessButton from '../buttons/GitHubAccessButton';

import budget from '../../img/Jobs/budget.png'
import videoteca from '../../img/Jobs/videoteca.png'

import page_game from '../../img/Jobs/page_game.png'
import todo from '../../img/Jobs/todo.png'

import breve from '../../img/Jobs/breve.png'


export default function PortfolioPage({ colorFontSet, colorBgSet, themeModeSet }) {

    const [groupJobs, setGroupJobs] = useState('Pessoais')

    function showJobs(e) {
        setGroupJobs(e.target.innerText)
    }

    return (
        <section className='portfolio-container'>
            <h1>Meu<span className={`${"me"} ${colorFontSet}`}>Portfolio</span></h1>
            <div className='portBx'>
                <div className='port-menu'>
                    <GlassButton title="Acadêmicos" handleClick={showJobs} activeClass={(groupJobs === 'Acadêmicos') ? 'active' : ''} colorBgSet={colorBgSet} themeModeSet={themeModeSet} />
                    <GlassButton title="Pessoais" handleClick={showJobs} activeClass={(groupJobs === 'Pessoais') ? 'active' : ''} colorBgSet={colorBgSet} themeModeSet={themeModeSet} />
                    <GlassButton title="Profissionais" handleClick={showJobs} activeClass={(groupJobs === 'Profissionais') ? 'active' : ''} colorBgSet={colorBgSet} themeModeSet={themeModeSet} />
                    <GitHubAccessButton title="Veja mais no " colorBgSet={colorBgSet} themeModeSet={themeModeSet} />
                </div>
                <div className='port-jobs'>
                    {(groupJobs === 'Acadêmicos') ?
                        <>
                            <a href="https://michel4lves.github.io/budget/" target="_blank" rel="noopener noreferrer">
                                <JobCard jobName="Budget" photo={budget} colorBgSet={colorBgSet} />
                            </a>
                            <a href="https://videoteca-mauve.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <JobCard jobName="Videoteca" photo={videoteca} custonClass='center-1' colorBgSet={colorBgSet} />
                            </a>
                        </> : null}
                    {(groupJobs === 'Pessoais') ? 
                        <>
                            <a href="https://michel4lves.github.io/Personal_Page_Game/" target="_blank" rel="noopener noreferrer">
                                <JobCard jobName="Page Game" photo={page_game} custonClass='left' colorBgSet={colorBgSet} />
                            </a>
                            <a href="https://michel4lves.github.io/Front_ToDo/" target="_blank" rel="noopener noreferrer">
                                <JobCard jobName="ToDo" photo={todo} custonClass='center-1' colorBgSet={colorBgSet} />
                            </a>
                        </> : null}
                    {(groupJobs === 'Profissionais') ? 
                        <>
                            <JobCard jobName="Em Breve" photo={breve} custonClass='center' colorBgSet={colorBgSet} />
                        </> : null}
                </div>
            </div>
        
        </section>
    )
}