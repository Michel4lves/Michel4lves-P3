import './Hello.css'

export default function Hello({ colorFontSet }) {
    return (
        <div className="presentation">
            <div className="hello">
                <h2 className={colorFontSet}>Olá,</h2>
                <span>eu sou</span>
            </div>
            <h1 className="my-name">Michel Alves</h1>
            <h3 className={colorFontSet}>Desenvolvedor Web Front End</h3>
        </div>
    )
}