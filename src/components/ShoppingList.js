import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[selectedCategory,setselectedCategory]=useState("All")
  function filtereditems(event){
    setselectedCategory(selectedCategory=> event.target.value)
    console.log(selectedCategory)

  }
  const newitems=items.filter(item =>{
    if (selectedCategory==="All") return true
    return item.category ===selectedCategory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filtereditems}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newitems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
