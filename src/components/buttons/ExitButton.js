import "./ExitButton.css"
import { RxCross1 } from "react-icons/rx";

export default function ExitButton({ colorFontSet }) {
    return <div className={`${"btn-exit-menu"}`}><RxCross1 className={`${"exit-icon"} ${colorFontSet}`} /></div>
}
