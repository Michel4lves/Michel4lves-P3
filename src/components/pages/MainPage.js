import "./MainPage.css"
import Avatar from "../avatar/Avatar";
import Hello from "../presentation/Hello";
import SocialMediaMenu from "../navbar/socialMedia/SocialMediaMenu";

export default function MainPage({ avatar, colorFontSet, colorBorderSet, colorHoverSet}) {
    return (
        <main className="intro">
            <SocialMediaMenu colorHoverSet={colorHoverSet} />
            <Avatar avatar={avatar} colorBorderSet={colorBorderSet} />
            <Hello colorFontSet={colorFontSet} />
        </main>
    )
}