import "./Avatar.css"



export default function Avatar({ avatar, colorBorderSet }) {
    return (
        <div className={`${'avatar'} ${colorBorderSet}`}>
            <div className="picture">
                <img src={avatar} alt="me.png" className={`${"me"}`} />
                <div className="eyes">
                    <div className="eye"></div>
                    <div className="eye"></div>
                </div>
            </div>
        </div>
    )
}