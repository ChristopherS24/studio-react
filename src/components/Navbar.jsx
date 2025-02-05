import './Navbar.css';
import Link from './Link';

function Navbar(){
    return (
        <ul>
            <li>
                <Link>Hola</Link>
            </li>
            <li>
                <Link>Chi siamo</Link>
            </li>
            <li>
                <Link>Contatti</Link>
            </li>
            <li>
                <Link>Dove trovarci</Link>
            </li>
        </ul>
    );
}

export default Navbar