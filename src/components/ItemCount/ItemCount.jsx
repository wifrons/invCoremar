import React, { useState } from 'react'

export default function ItemCount({initialValue = 1, stock, onAdd}) {
  const [quantity, setQuantity] = useState(initialValue);
  
  const decrease = () => {
    if(quantity > 1){
        setCantidad(quantity => quantity - 1);
    }
  };

  const increase = () => {
    if(stock > quantity){
      setQuantity(quantity => quantity + 1);
    }
  };
    
  return (
    <>
        <h3> {stock > 1 ? `Cantidad: ${quantity}` : ""} </h3>
        <button type="button" className="btn btn-outline-danger me-4" onClick={decrease}>➖</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => onAdd(quantity)} disabled={stock < 1 } >Agregar al carrito</button>
        <button type="button" className="btn btn-outline-success ms-4" onClick={increase}>➕</button>
    </>
  ) 
}

