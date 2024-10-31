import React from "react";

const Header = () => {
    return (
        <header className="bg-pink-300 text-black h-12 py-3 px-3 flex-justify-between items-center">
        
            <h1 className="text-3xl font-bold">Sarwat Jahan</h1>
            <ul className="flex space-x-10">
                <li>
                    <a href="#about" className="bg-pink-200 hover:text-red">About Me</a>
                </li>
                <li>
                    <a href="#portfolio" className="bg-pink-200 hover:text-red">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" className="bg-pink-200 hover:text-red">Contact</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;