import './ContactPage.css'

import ContactForm from '../forms/ContactForm'

export default function ContactPage({ colorFontSet, colorBgSet, colorBorderSet, themeModeSet }) {
    return (
        <section className='contact-container'>
            <h1>Entre em<span className={`${"me"} ${colorFontSet}`}>Contato</span></h1>
            <p>Se você está em busca de um desenvolvedor web apaixonado por criar aplicações interativas e funcionais, entre em contato comigo para discutir <span className={colorFontSet}>oportunidades</span> de trabalho.</p>
            <div className='contact-form-box'>
                <ContactForm colorBgSet={colorBgSet} colorBorderSet={colorBorderSet} themeModeSet={themeModeSet} />
            </div>
        </section>
    )
}