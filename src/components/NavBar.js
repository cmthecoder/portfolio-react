import { Link } from "react-router-dom";
import "../styles/NavBar.css"

const NavBar = () => {
  return (
    <nav class="nav-bar">
        <div class='my-name'>
            <Link 
                to='/'
            >
                Christopher Mems
            </Link>
        </div>

        <ul>
            <li>
                <Link
                    to='/about'
                >
                    About
                </Link>
            </li>

            <li>
                <Link
                    to='/contact'
                >
                    Contact
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