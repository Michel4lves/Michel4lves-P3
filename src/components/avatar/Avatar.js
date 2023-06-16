import "./Avatar.css"


export default function Avatar({ avatar }) {

    return (
        <div className={`${'avatar'} ${'color-bdr-3'}`}>
            <div className="picture">
                <img src={avatar} alt="me.png" className={`${"me"} ${"color-set-ava"}`} />
                <div className="eyes">
                    <div className="eye"></div>
                    <div className="eye"></div>
                </div>
            </div>
        </div>
    )
}