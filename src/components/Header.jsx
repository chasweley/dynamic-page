import {NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="grid-header">
                <nav>
                    <input type="checkbox" id="nav-toggle" style={{ display: "none" }} />
                    <ul id="navigation">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div id="ham-menu">
                    <label htmlFor="nav-toggle">
                        <i className="fa-solid fa-bars" />
                    </label>
                </div>
            </header>
        </>
    )
}