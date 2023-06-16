import './GlassButton'
import { DiGithubBadge } from 'react-icons/di'

export default function GitHubAccessButton({ title }) {
    return (
        <a href="https://github.com/Michel4lves" target="_blank" rel="noopener noreferrer">
            <button className={`${"color-bg-set-btn"} ${"color-font-set-btn"}`}>
                {title}
                <DiGithubBadge />
            </button>
        </a>
    )
}