import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedCategory, setSearchedCategory] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleCategorySearch(event) {
    setSearchedCategory(event.target.value);
  }
  // console.log(setSearchedCategory)

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" || searchedCategory ==="All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onCategorySearch={handleCategorySearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>  
    </div>
  );
}

export default ShoppingList;