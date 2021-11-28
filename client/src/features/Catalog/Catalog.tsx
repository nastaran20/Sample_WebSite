import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])  //  get [] is very important becouse make product stock in loop

  /*function addproduct(){
  setProducts([...products,{name:'item 3', price:'50000'}])
  }*/

    return (
        <>       
            <ProductList products={products} />            
        </>
    )
}