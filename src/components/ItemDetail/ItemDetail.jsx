import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../hooks/useCart";

export default function ItemDetail({ id, name, img, description, category, price, stock }) {

    const { addItemCart } = useCart();

    //agrega el product al carrito
    const handleAdd = (quantity) => {
        const productToAdd = {
            id, 
            name,   
            price, 
            quantity,
            stock
        }
        addItemCart(productToAdd);
    }

    return (

        <div className="container border border-2 d-flex flex-row justify-content-between mx-auto" style={{ width: "40rem" }} >

            <div className="d-flex flex-column justify-content-center" style={{ width: "5rem" }}>
                <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
                <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
                <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
            </div>

            <div className="card border border-0 d-flex justify-content-start" >
                <div className="image-container">
                    <img className="card-img-top" style={{ width: 300 }} src={img} alt={name} />
                </div>

                <div className="card-body">
                    <h5>Descripcion: <p>{description}</p> </h5>
                    <h5>Precio: $ {price}</h5>
                    <h5>Disponible: {stock} </h5>
                    <ItemCount stock={stock} onAdd={handleAdd} />
                    <Link className="btn btn-primary" to="/cart">Ir a Carrito</Link>
                </div>
            </div>

        </div>
    )
}

