import React from "react"
import Logo from "/src/assets/react-logo.png"

export default function Navbar() {
    return (
        <nav className="Navbar">
            <img src={Logo} alt="React Logo" className="nav-logo"/>
            <h3 className="nav-logo_text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}