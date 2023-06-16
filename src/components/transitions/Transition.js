import './Transition.css'

export default function Transition({ onTransition }) {
    return <div className={`${"transition"} ${onTransition} ${"color-bg-set"}`}></div>
}
