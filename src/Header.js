import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;