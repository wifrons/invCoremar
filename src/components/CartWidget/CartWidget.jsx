import '../CartWidget/CartWidget.css'
import { useCart } from '../../hooks/useCart';
import img_sales_cart from '../../assets/icon/sales_cart.png'
import { NavLink } from 'react-router-dom';


export default function CartWidget() {
    // const { totalQuantity } = useContext(CartContext);
    const { totalQuantity } = useCart();

    return (
        <NavLink className="navbar-brand" to="/cart">
            <img src={img_sales_cart} className="logoCart" alt="logoCart" />
            <span className="badge text-bg-secondary">{ totalQuantity }</span>
        </NavLink>
    )
}
