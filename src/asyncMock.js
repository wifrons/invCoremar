const products = [

    {
        id: "7",
        name: "Ipad Mini",
        price: 1200,
        category: "tablet",
        img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
        stock: 10,
        description: "Descripcion de Ipad mini",
        discount:15
    },
    {
        id: "8",
        name: "notebook",
        price: 1200,
        category: "computer",
        img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
        stock: 10,
        description: "Descripcion de Ipad",
        discount:10
    },
    {
        id: "9",
        name: "notebook",
        price: 1200,
        category: "computer",
        img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
        stock: 15,
        description: "Descripcion de computer",
        discount:25
    },
    {
        id: "10",
        name: "Fotocopiado",
        price: 20,
        category: "copycenter",
        img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
        stock: 15,
        description: "Descripcion de Fotocopiado",
        discount:25
    },
    {
        id: "11",
        name: "Boligrafo Ofimak",
        price: "20,00",
        category: "office",
        img: "data:image/jpeg;base64,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",
        stock: 13,
        description: "Boligrafos Triangular Trion Grip Ofimak",
        discount:25
    },
    {
        id: "12",
        name: "Boligrafo Ofimak",
        price: "22,00",
        category: "office",
        img: "data:image/jpeg;base64,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",
        stock: 13,
        description: "Boligrafos Triangular Trion Grip Ofimak",
        discount:25
    },
];

// obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

// obtener un solo producto por id
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1000);
    });
};