import React from "react";
import "./style.css";

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo or Brand Name */}
                <a href="/" className="navbar-logo">
                    Busca-Saúde
                </a>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#services">Locais</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>

                {/* Optional: Call to Action */}
                <a href="/login">
                    <button className="navbar-login-bnt" >Entrar</button>
                </a>
                <a href="/signin">
                    <button className="navbar-signup-btn">Cadastrar</button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
