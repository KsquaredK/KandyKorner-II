import React from "react"
import "./Product.css"

export const ProductCard = ({ product }) => (
    <section className="product">
        <h3 className="product__name">#{product.id}: {product.name}</h3>
        <address className="product__type">{product.typeId.type}</address>
        <h5 className="product__price">${product.price}</h5>
    </section>
)
