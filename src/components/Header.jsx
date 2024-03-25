import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="grid-header">
                <nav>
                    <input type="checkbox" id="nav-toggle" style={{ display: "none" }} />
                    <ul id="navigation">
                        <li>
                            <NavLink to="/dynamic-page/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-page/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-page/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-page/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-page/contact">Contact</NavLink>
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