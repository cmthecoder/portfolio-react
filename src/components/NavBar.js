import { Link } from "react-router-dom";
import "../styles/NavBar.css"
import { ImHome } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";

const NavBar = () => {
  return (
    <nav className="nav-bar">
        <ul>
            <li>
                <Link
                    to='/about'
                >
                    <VscAccount />
                </Link>
            </li>

            <li>
                <Link
                    to='/contact'
                >
                    <ImPhone />
                </Link>
            </li>

            <li>
                <Link
                    to='/'
                >
                    <ImHome />
                </Link>
            </li>
            <li>
                <Link
                    to='/resume'
                >
                    Resume
                </Link>
            </li>

            <li>
                <Link
                    to='/projects'
                >
                    Projects
                </Link>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;