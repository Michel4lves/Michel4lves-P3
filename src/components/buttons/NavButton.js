import './NavButton.css'

export default function NavButton() {
    return (
        <>
            <div className="menu-btn">
                <span className={`${"first-bar"} ${"color-bg-set"}`}></span>
                <span className={`${"second-bar"} ${"color-bg-set"}`}></span>
                <span className={`${"third-bar"} ${"color-bg-set"}`}></span>
            </div>
        </>
    )
}
