import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"

export const ProductList = () => {
  // This state changes when `getProduct()` is invoked below
  const { products, getProducts } = useContext(ProductContext)

  //useEffect - reach out to the world for something
//   upon page load, call getProduct once to populate Product array
  useEffect(() => {
    console.log("ProductList: useEffect - getProduct")
    getProducts()
  }, [])


  return (
    <div className="products">
      {console.log("ProductList: Render", products)}
      {
        products.map(product => {
          return <ProductCard key={product.id} product={product} />
        })
      }
    </div>
  )
}