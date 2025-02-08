import './Navbar.css';
import Link from './Link';

function Navbar(){

    const x = 11;
    const y = 1;

    return (
        <>
        <div className='flex flex-col gap-10'>
            <div className={`box rounded ${x < 10 ? "rotated" : ""}`}>x è {x}</div>
            <div className={`bg-blue-500 rounded-lg w-72 h-72  ${y < 10 ? "rotate-45" : "bg-yellow-300"}`}>hola</div>
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
            </div>
        </>
    );
}

export default Navbar