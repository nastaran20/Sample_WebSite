import { useEffect, useState } from "react";

function App() {
const [products, setProducts]=useState([
  {name:'product 1', price:200000},
  {name:'product 3', price:100000},
]);

useEffect(()=>{
  fetch('http://localhost:5000/api/products')
  .then(response=>response.json())
  .then(data=>setProducts(data))
},[])  //  get [] is very important becouse make product stock in loop

/*function addproduct(){
setProducts([...products,{name:'item 3', price:'50000'}])
}*/

function addproduct(){
  setProducts(prevState=>[...prevState,
    {name:'product'+(prevState.length+1), price:(prevState.length*100)+100}])
  }

  return (
    <div>
      <h1>Test</h1>
      <ul>
    {products.map((item,index)=>(
      <li key={index}>{item.name}-{item.price}</li>
    ))}
    </ul>
    <button onClick={addproduct}>Add New product</button>
    </div>
  );
}

export default App;
