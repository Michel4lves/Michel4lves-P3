import './SkillKnowledge.css'

export default function SkillKnowledge({ skillName }) {

    const skillNameDescription = () => {
        switch (skillName) {
            case 'Html':
                return <p className="skill-text">Meu conhecimento permite-me criar páginas web modernas e funcionais, estruturando o conteúdo de forma organizada e semântica, utilizando as tags corretas para diferentes elementos, utilizando recursos avançados, como elementos de mídia e formulários interativos.</p>
            case 'Css':
                return <p className="skill-text">Minha proficiência permite-me projetar layouts atraentes para sites e aplicações web. Sou capaz de controlar a aparência de elementos personalizando-os, criar recursos avançados com elementos visuais dinâmicos e garantindo que os sites se adaptem a diferentes dispositivos e tamanhos de tela.</p>
            case 'Javascript':
                return <p className="skill-text">Minhas habilidades permitem-me criar funcionalidades complexas e interativas para sites e aplicações web, com código limpo e eficiente, com conhecimento em bibliotecas como jQuery e React, que me ajudam a estender as funcionalidades da linguagem.</p>
            case 'React':
                return <p className="skill-text">Sou capaz de criar componentes reutilizáveis e organizados, para construir aplicações web interativas e de alto desempenho. Estou familiarizado com o uso de states e com roteamento usando React Router, permitindo a criação de aplicações de página única (SPA) com navegação suave e intuitiva.</p>
            case 'Sass':
                return <p className="skill-text">Meus conhecimentos em Sass tornam-me capaz de estilizar páginas com Css usando conceitos como .variáveis, alinhamento de seletores, herança e a utilização de mixins, funções e diretivas como imports e extends.</p>
            case 'Jquery':
                return <p className="skill-text">Consigo utilizar seus recursos para criar efeitos visuais, como animações, transições suaves e efeitos especiais. Também sou capaz de manipular eventos, responder a cliques, toques e outras interações do usuário para criar experiências interativas e envolventes.</p>
            case 'Git':
                return <p className="skill-text">Possuo sólidos conhecimentos em Git, permitindo-me colaborar de forma efetiva em equipes de desenvolvimento, controlar o histórico de alterações e gerenciar o fluxo de trabalho garantindo a integridade do código. Estou familiarizado com plataformas de hospedagem de repositórios como o GitHub.</p>
            case 'Python':
                return <p className="skill-text">Tenho conhecimentos básicos em Python, compreendo loops, condicionais, e manipulação strings, listas e dicionários. Estou familiarizado com a sintaxe da linguagem e com a utilização de funções, módulos para facilitar a reutilização.</p>
            default:
                return "";
        }
    }

    return (
        <>
            {skillNameDescription()}
        </>
    )
}
