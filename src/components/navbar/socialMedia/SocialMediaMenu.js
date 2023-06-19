import './SocialMediaMenu.css'
import { DiGithubBadge } from 'react-icons/di'
import { GrLinkedin } from "react-icons/gr";

export default function SocialMediaMenu({ colorHoverSet }) {
    return (
        <aside>
            <a href="https://github.com/Michel4lves" target="_blank" rel="noopener noreferrer">
                <DiGithubBadge className={`${"social-svg"} ${colorHoverSet}`} />
            </a>
            <a href="https://www.linkedin.com/in/michel-alves-892457232/" target="_blank" rel="noopener noreferrer">
                <GrLinkedin className={`${"social-svg"} ${colorHoverSet}`} />
            </a>
        </aside>
    )
}