import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CarItem/CartItem";
import img_sales_cart from '../../assets/icon/sales_cart.png'

export default function Cart() {
  const { cart, clearCart, totalPrice, totalQuantity } = useCart();
  const totalItemsInCart = totalQuantity;

  if (totalItemsInCart === 0) {
    return (
      <div className="container align-middle">
        <div className="card mx-2 mt-5 shadow p-3 mb-5 bg-body rounded" style={{ width: 400 }}>
          <img src={img_sales_cart} className="card-img-top" alt="..." style={{ width: '96px' }} />
          <div className="card-body">
            <p className="card-text">No hay items en el carrito!</p>
            <NavLink className="btn btn-primary" to="/">Inicio</NavLink>
          </div>
        </div>
      </div>
    )}

  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col-4">Producto</div>
          <div className="col-2">Precio</div>
          <div className="col-2">Cantidad</div>
          <div className="col-2">Total</div>
          <div className="col-2">Accion</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">{cart.map((item) => <CartItem key={item.id} {...item} />)}</div>
        </div>
        <br />
        <div className="row">
          <div className="col col-lg-2">Total: ${totalPrice}</div>
        </div>
        <Link className="btn btn-primary" to='/checkout'>Finalizar Compra</Link>
      </div>
    </div>
  );
}
