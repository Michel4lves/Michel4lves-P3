import './Transition.css'

export default function Transition({ onTransition, colorBgSet }) {
    return <div className={`${"transition"} ${onTransition} ${colorBgSet}`}></div>
}
