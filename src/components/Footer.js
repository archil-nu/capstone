import React from "react";
import Logo from "../../public/logo.png";

export const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon Restaurant Logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/Reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <h3>Copyright 2023, Archil Lelashvili.</h3>
        </footer>
    )
};

export default Footer;