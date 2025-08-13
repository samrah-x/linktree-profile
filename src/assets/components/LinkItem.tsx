import React from "react";

interface LinkItemProps {
    title: string;
    url: string;
    icon: React.ReactNode;
}

function LinkItem({ title, url, icon }: LinkItemProps) {
    return (
        <a className="link-item"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
            <span>{title}</span>
        </a>
    );
}

export default LinkItem;