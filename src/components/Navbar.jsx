import './Navbar.css';
import Link from './Link';

function Navbar(){

    const x = 11;

    return (
        <>
        <div className={`box rounded ${x < 10 ? "rotated" : ""}`}>x è {x}</div>
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
        </>
    );
}

export default Navbar