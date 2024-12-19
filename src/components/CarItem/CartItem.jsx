import { useCart } from "../../hooks/useCart"

export default function CartItem({ id, name, quantity, price }) {

    const { removeItemCart } = useCart();

    const handleRemove = (id) => {
        removeItemCart(id)
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">{name}</div>
                    <div className="col-2">{price}</div>
                    <div className="col-2">{quantity}</div>
                    <div className="col-2">{price * quantity}</div>
                    <div className="col-2"><button onClick={() => handleRemove(id)}>❎ Eliminar</button></div>
                </div>
            </div>
        </div>
    )
}

