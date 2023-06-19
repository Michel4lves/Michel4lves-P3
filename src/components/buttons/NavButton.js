import './NavButton.css'

export default function NavButton({ colorBgSet }) {
    return (
        <>
            <div className="menu-btn">
                <span className={`${"first-bar"} ${colorBgSet}`}></span>
                <span className={`${"second-bar"} ${colorBgSet}`}></span>
                <span className={`${"third-bar"} ${colorBgSet}`}></span>
            </div>
        </>
    )
}
