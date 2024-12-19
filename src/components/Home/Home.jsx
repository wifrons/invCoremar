import { Link } from 'react-router-dom'
import '../Home/Home.css'
import img_icoremar_ofi from '../../assets/icon/icoremar_ofi.png'
import img_icoremar_compu from '../../assets/icon/icoremar_compu.png'
import img_icoremar_copy from '../../assets/icon/icoremar_copy.png'

export default function Home({ greeting, color }) {
    return (
        <>
            <div className="main">
                {<h2 style={{ color: color, margin: "50px", textAlign: "center" }}>{greeting}</h2>}


                <div className="cards">
                    <div className="productsOfi">
                        <div className="productsOfi-actions">
                            <h1>Oficina</h1>
                            <p>Encuentra artículos para tu oficina y eleva tu rendimiento.</p>
                            <Link className="nav-link" to="/category/office">Ver mas</Link>
                        </div>
                        <div className="productsOfi-image">
                        
                            <img src={img_icoremar_ofi} alt="" id="productsOfi-img" />
                            {/* <img src="CoderHouseReact_icoremar/icoremar_ofi.png" alt="" id="productsOfi-img" /> */}
                        </div>
                    </div>
                    <div className="productsCom">
                        <div className="productsCom-actions">
                            <h1>Computación</h1>
                            <p>Elige tu dispositivo electronico: Computadora, Impresora, Monitor y Accesorios.</p>
                            {/* <a href="productsCompu.html">Ver mas</a> */}
                            <Link className="nav-link" to="/category/computer">Ver mas</Link>
                        </div>
                        <div className="productsCom-image">
                            <img src={img_icoremar_compu} alt="" id="productsCom-img" />
                            {/* <img src="CoderHouseReact_icoremar/icoremar_compu.png" alt="" id="productsCom-img" /> */}
                        </div>
                    </div>
                    <div className="productsCop">
                        <div className="productsCop-actions">
                            <h1>Digitalización</h1>
                            <p>Servicios de Centro de copiado de alta calidad, Blanco/Negro y a Color.</p>
                            <Link className="nav-link" to="/category/copycenter">Ver mas</Link>
                        </div>
                        <div className="productsCop-image">
                        
                        <img src={img_icoremar_copy} alt="" id="productsCop-img" />
                            {/* <img src="CoderHouseReact_icoremar/icoremar_copy.png" alt="" id="productsCop-img" /> */}
                        </div>
                    </div>

                </div>
                <div className="ofertas">
                    <hr />
                    <h1>Nuestras Ofertas</h1>
                </div>

            </div>

        </>
    )
}
