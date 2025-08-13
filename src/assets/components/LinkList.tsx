
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LinkItem from "./LinkItem";

export default function LinkList() {
    const links = [
        { title: "GitHub", url: "https://github.com/samrahm", icon: <FaGithub /> },
        { title: "LinkedIn", url: "https://www.linkedin.com/in/samrah-mumtaz/", icon: <FaLinkedin /> },
        { title: "Email", url: "mailto:samrahmumtazm@gmail.com", icon: <MdEmail /> },
        { title: "Phone", url: "https://wa.me/+923255673050", icon: <FaWhatsapp /> },
    ];

    return (
        <div className="link-list">
            {links.map((link) => (
                <LinkItem title={link.title} url={link.url} icon={link.icon} />
            ))}
        </div>
    );
}