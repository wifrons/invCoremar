import { useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"

export default function Checkout() {


    const swalme = (message, icon) => {
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false,
            timer: 3000
        })
    }

    const [orderCreated, setOrderCreated] = useState(false);
    const { cart, totalQuantity, totalPrice, clearCart } = useCart();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [debitCard, setDebitCard] = useState(false);
    const [creditCard, setCreditCard] = useState(true);

    const clearCheckoutForm = () => {
        setFirstName("");
        setLastName("");
        setPhone("");
        setAddress("");
        setEmail("");
        setDebitCard(false);
        setCreditCard(true);
        setOrderCreated(false);
    }

    const createOrder = async () => {
        try {
            const order = {
                buyer: {
                    name: firstName + " " + lastName,
                    phone: phone,
                    address: address,
                    email: email
                },
                items: cart,
                totalQuantity,
                totalPrice,
                paymentMethod: debitCard === true ? "Debito" : "Credito",
                date: new Date()
            }

            if (cart.length === 0) {
                swalme("Carrito vacio", "error")
                return;
            }

            if (firstName === "" || lastName === "" || email === "" || phone === "") {
                swalme("Falta informacion en sus datos", "error")
                return;
            }

            //obtener todos los ids de la compra
            const idProducts = cart.map((item) => item.id);

            //obtener toda la tabla de productos de la BD firebase 
            const productRef = collection(db, "products");

            //traer los productos de la BD que conincidan con la compra
            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", idProducts)));

            //controlar/verificar stock (proceso batch)
            const { docs } = productsAddedFromFirestore;
            //-->se crea una arreglo/lista de productos sin stock
            const outOfStock = [];
            //-->Crear el proceso batch
            const batch = writeBatch(db);
            docs.forEach((doc) => {
                //obtener los datos de todos los documentos
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                //(devuelve 1 producto)
                const productAddedToCart = cart.find((item) => item.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;

                if (stockDb >= prodQuantity) {
                    //hay stock y puedo comprar
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });

                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            //generar orden de compra
            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");

                const orderAdded = await addDoc(orderRef, order);
                // swalme(`El id de su orden es: ${orderAdded.id}`, "success");
                swalme("La Compra se realizo con exito, Gracias por preferirnos.", "success");
                setOrderCreated(true);
                clearCart();
                clearCheckoutForm();
            } else {
                swalme("Hay productos sin stock.", "error");
            }

        } catch (err) {
            swalme("Error in Checkout.createOrder -->> error: " + err, "error");
        }

        if (orderCreated) {
            <h1>Gracias por su compra</h1>
        }
    }


    return (
        <>
            <div>
                <h2 className="text-center">Confirmación de Orden de Compra</h2>
                <div className="container align-middle" style={{ width: 400 }} >
                    {/* <form onSubmit={createOrder}> */}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nameInput1" className="form-label">Nombre</label>
                            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control" id="nameInput1" aria-describedby="nameHelp" placeholder="Nombre(s) del titular" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="nameInput2" className="form-label">Apellido</label>
                            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="form-control" id="nameInput2" aria-describedby="nameHelp2" placeholder="Apellido(s) del titular" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="pedro@micorreo.com" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phoneInput" className="form-label">Dirección</label>
                            <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" id="addressInput" aria-describedby="addressHelp" placeholder="Avenida, Calle, ..." />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phoneInput" className="form-label">Telefono</label>
                            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" className="form-control" id="phoneInput" aria-describedby="phoneHelp" placeholder="+54 555 555555" />
                        </div>

                        <h5 className="mb-3">Metodo de pago</h5>
                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input onChange={(e) => {
                                    setCreditCard(e.target.checked)
                                    setDebitCard(!e.target.checked)
                                }} checked={creditCard} id="credit" name="paymentMethod" type="radio" className="custom-control-input" ></input>
                                <label className="custom-control-label" htmlFor="credit">Tarjeta de crédito</label>
                            </div>

                            <div className="custom-control custom-radio">
                                <input onChange={(e) => {
                                    setDebitCard(e.target.checked)
                                    setCreditCard(!e.target.checked)
                                }} checked={debitCard} id="debit" name="paymentMethod" type="radio" className="custom-control-input" ></input>
                                <label className="custom-control-label" htmlFor="debit">Tarjeta de debito</label>
                            </div>
                        </div>

                    </form>

                    <button onClick={createOrder} className="btn btn-primary">Generar Orden de Compra</button>
                </div>
            </div>
        </>
    )
}

