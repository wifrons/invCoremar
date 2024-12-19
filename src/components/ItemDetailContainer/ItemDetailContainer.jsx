import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductByID } from "../../asyncMock";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const { productId } = useParams()

    const swalme = (message, icon) => {
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false,
            timer: 3000
        })
    }

  useEffect(() => {
    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {
        const dbproduct  = { id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(dbproduct);
      })
      .catch((err) => {
        swalme("Error in ItemDetailContainer.useEffect -->> error: " + err, "error");
      })
  }, [productId])

  return (
    <div>
      <h2>Detalle del producto</h2>
      <hr />
      <ItemDetail {...product} />
    </div>
  );
}
