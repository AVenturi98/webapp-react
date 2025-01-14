import { NavLink } from "react-router";
import Search from "./search/Search";

export default function Nav() {

    return (
        <div className="nav-bar">
            <ul className="nav_link">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <Search />
                </li>
            </ul>
        </div>
    )
}