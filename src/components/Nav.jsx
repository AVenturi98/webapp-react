import { NavLink } from "react-router";

export default function Nav() {

    return (
        <div className="nav-bar">
            <ul className="nav_link">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
            </ul>
        </div>
    )
}