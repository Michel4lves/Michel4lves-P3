import "./GlassButton.css"

export default function GlassButton({ title, handleClick, activeClass, colorBgSet }) {
    return (
        <button className={`${"glass-button"} ${activeClass} ${colorBgSet} ${"color-font-set-btn"}`} onClick={handleClick}>{title}</button>
    )
}