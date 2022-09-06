import React,{useState} from "react";

function Item({ name, category }) {
  const[isinCart,setCart]=useState(false)
  function addtoCart(){
   setCart(isinCart => !isinCart)
  }
  return (
    <li className={isinCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addtoCart}className="add">{isinCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
