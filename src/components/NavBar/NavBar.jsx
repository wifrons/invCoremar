import { Link, NavLink, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import '../NavBar/NavBar.css'
import img_icoremar_logo from "../../assets/icon/icoremar_logo.png"

export default function NavBar({ title }) {

    // const urlLocation = useLocation();
    // const selectedLink = (path) => urlLocation.pathname === path;
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">

                <NavLink className="navbar-brand" to="/">
                    {/* <img style={{ width: '96px' }} src="/CoderHouseReact_icoremar/icon/icoremar_logo.png" className="logo icoremar" alt="logo" /> */}
                    <img style={{ width: '96px' }} src={img_icoremar_logo} className="logo icoremar" alt="logo" />
                    <span style={{ fontSize: '32px' }}>{title}</span>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "ActiveOption" : "NoActiveOption"} to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "ActiveOption" : "NoActiveOption"} to="/category/office">Oficina</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "ActiveOption" : "NoActiveOption"} to="/category/computer">Computación</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "ActiveOption" : "NoActiveOption"} to="/category/copycenter">Digitalización</NavLink>
                        </li>
                        {/* <li>
                            <NavLink className={({ isActive }) => isActive ? "ActiveOption" : "NoActiveOption"} to="/"><span className="glyphicon glyphicon-user"></span> Ingresar</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
