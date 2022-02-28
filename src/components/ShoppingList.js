import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searched, setSearched] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleCategorySearch(event) {
    setSearched(event.target.value);
  }
console.log(searched)
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }).filter((item) => {
    if (searched === "") return true;
    return item.name.toLowerCase().includes(searched.toLowerCase());
  })
  
// console.log(itemsToDisplay)
  return (
    <div className="ShoppingList">
      <ItemForm setItems={setItems} items={items}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleCategorySearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>  
    </div>
  );
}

export default ShoppingList;