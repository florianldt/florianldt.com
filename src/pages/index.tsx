import * as React from "react";
import type { HeadFC } from "gatsby";
import Memoji from "../images/memoji.png";

const pageStyles = {
    color: "#232129",
    paddingLeft: 54,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
    marginTop: 0,
    marginBottom: 10,
};

const subHeadingStyles = {
    marginTop: 0,
    marginBottom: 0,
};

const listStyles = {
    marginTop: 20,
    paddingLeft: 10,
};

const listItemStyles = {
    padding: 5,
    fontWeight: 300,
    fontSize: 16,
    maxWidth: 560,
};

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
};

const links = [
    {
        text: "Avanssion inc.",
        url: "https://www.avanssion.com",
    },
    {
        text: "Twitter",
        url: "https://www.twitter.com/florianldt",
    },
    {
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/florianldt",
    },
    {
        text: "GitHub",
        url: "https://www.github.com/florianldt",
    },
    {
        text: "Seoul iOS Meetup",
        url: "https://www.meetup.com/seoul-ios-meetup",
    },
];

const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <img width={160} height={160} src={Memoji} />
            <h1 style={headingStyles}>Florian Ludot</h1>
            <h3 style={subHeadingStyles}>Co-Founder & CTO</h3>
            <ul style={listStyles}>
                {links.map((link) => (
                    <li key={link.url} style={{ ...listItemStyles }}>
                        <span>
                            <a
                                style={linkStyle}
                                href={link.url}
                                target="__blank"
                            >
                                {link.text}
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>florianldt</title>;
