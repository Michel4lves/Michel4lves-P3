import './InputText.css'

export default function InputText({ text, name, type, s50s100, colorBorderSet, themeModeSet }) {
    return (
        <div className={`${'inputBox'} ${s50s100}`}>
            <input type={type} required id={name} name={name} autoComplete='false' className={`${"imput"} ${"contact"} ${colorBorderSet} ${themeModeSet}`}></input>
            <span className='placeholder'>{text}</span>
        </div>
    )
}