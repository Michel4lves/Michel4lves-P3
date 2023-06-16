import "./GlassButton.css"

export default function GlassButton({ title, handleClick, activeClass }) {
    return (
        <button className={`${activeClass} ${"color-bg-set-btn"} ${"color-font-set-btn"}`} onClick={handleClick}>{title}</button>
    )
}