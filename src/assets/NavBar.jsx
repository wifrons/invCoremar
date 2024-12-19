import { Link, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import '../NavBar/NavBar.css'
import { useCart } from "../hooks/useCart";

export default function NavBar({ title }) {

    const urlLocation = useLocation();
    const selectedLink = (path) => urlLocation.pathname === path;
    const { totalQuantity } = useCart();

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    <img style={{ width: '96px' }} src="icon/icoremar_logo.png" className="logo icoremar" alt="logo" />
                    <span style={{ fontSize: '32px' }}>{title}</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${selectedLink("/") ? "active" : ""}`}
                                to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/office">Oficina</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/computer">Computación</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/copycenter">Digitalización</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/"><span className="glyphicon glyphicon-user"></span> Ingresar</Link>
                        </li>

                        <li className="nav-item">
                            <CartWidget amount={totalQuantity} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
