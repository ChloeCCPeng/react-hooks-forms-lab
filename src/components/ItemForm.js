import React, { useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({setItems, items}) {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: category,
      };
    setItems ([...items, newItem]);
    }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={(e)=>{setItemName (e.target.value)}} value={itemName} type="text" name="name" />
      </label>
      <label>
        Category:
        <select onChange={(e)=>{setCategory (e.target.value)}} value={category} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
