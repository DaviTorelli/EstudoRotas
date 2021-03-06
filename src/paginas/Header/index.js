import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div>
                <img src="assets/logo.png" />
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/sabores'>Sabores</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
        </header>
    )
}