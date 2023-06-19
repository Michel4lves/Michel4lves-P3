import './GlassButton'
import { DiGithubBadge } from 'react-icons/di'

export default function GitHubAccessButton({ title, colorBgSet, themeModeSet }) {
    return (
        <a href="https://github.com/Michel4lves" target="_blank" rel="noopener noreferrer">
            <button className={`${"git-button"} ${colorBgSet} ${themeModeSet}`}>
                {title}
                <DiGithubBadge />
            </button>
        </a>
    )
}