import '../ItemListContainer/ItemListContainer.css';

import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../Itemlist/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, CollectionReference, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    const swalme = (message, icon) => {
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false,
            timer: 3000
        })
    }

    useEffect(() => {
        const CollectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(CollectionRef)
            .then((querySnapshot) => {
                const dbproducts = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(dbproducts);
            })
            .catch((err) => {
                swalme("Error in ItemListContainer.useEffect -->> error: " + err, "error");
            })

    }, [categoryId])

    return (
        <div>
            <h2 className="text-center">Los mejores productos disponibles a precios increíbles</h2>
            {<ItemList products={products} />}
        </div>
    )
}
