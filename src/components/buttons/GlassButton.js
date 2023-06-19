import "./GlassButton.css"

export default function GlassButton({ title, handleClick, activeClass, colorBgSet, themeModeSet }) {
    return (
        <button className={`${"glass-button"} ${activeClass} ${colorBgSet} ${themeModeSet}`} onClick={handleClick}>{title}</button>
    )
}