import Item from "../Item/Item";

import { memo } from "react";

function ItemList({ products }) {
    return (
        <div className="container d-flex flex-wrap">
            {products.map(product => <Item key={product.id} product={product} />)}
        </div>
    )
}

export default memo(ItemList);


