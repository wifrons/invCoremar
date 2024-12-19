import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    //cart products
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    //si el producto existe en el carrirto
    const isInCart = (idProduct) => {
        return cart.some((item) => item.id === id);
    };

    //funcion para agregar prod en el carrito
    const addItemCart = (objectToAdd) => {
        setCart((itemCart) => [...itemCart, objectToAdd]);
    };

    //funcion para eliminar prod del carrito
    const removeItemCart = (idProduct) => {
        const cartUpdate = cart.filter((prod) => prod.id !== idProduct);
        setCart(cartUpdate);
    };

    //limpiar carrito
    const clearCart = () => {
        setCart([]);
    };

    //obtener total productos en el carrito
    const getTotal = () => {
        let  total = 0;
        cart.forEach((item) => {
            total += item.quantity * item.price;
        });
        setTotalPrice(total);
    }

    //obtener total en carrito
    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach((item) => { accu += item.quantity });
        setTotalQuantity(accu);
    };

    const cartContextProv = {
        cart,
        isInCart,
        addItemCart,
        removeItemCart,
        clearCart,
        getTotal,
        totalQuantity,
        totalPrice
    }

    useEffect(() => {
        getTotalQuantity();
        getTotal();
    }, [cart]
    )

    return (
        <CartContext.Provider value={cartContextProv}>
            {children}
        </CartContext.Provider>
    )
}