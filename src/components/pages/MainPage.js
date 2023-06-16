import "./MainPage.css"
import Avatar from "../avatar/Avatar";
import Hello from "../presentation/Hello";
import SocialMediaMenu from "../navbar/socialMedia/SocialMediaMenu";

export default function MainPage({ avatar }) {
    return (
        <main className="intro">
            <SocialMediaMenu />
            <Avatar avatar={avatar}/>
            <Hello />
        </main>
    )
}