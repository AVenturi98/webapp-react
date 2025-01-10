import { NavLink } from "react-router";

export default function Nav() {

    return (
        <div className="nav-bar">
            <ul className="nav_link">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/:id'>Film</NavLink>
                </li>
            </ul>
        </div>
    )
}