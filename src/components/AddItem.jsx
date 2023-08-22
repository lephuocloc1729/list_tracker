import { useState } from "react";

const AddItem = ({ items, setItems }) => {
  const [addedItem, setAddedItem] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Add item"
        className="py-2 px-4 text-xl rounded-full border-[1px] border-slate-300 focus:outline-black focus:outline"
        value={addedItem}
        onChange={(e) => setAddedItem(e.target.value)}
        required
      />
      <button
        className="px-6 py-2 text-xl rounded-full bg-slate-700 text-white"
        onClick={(e) => {
          let newItems = [
            ...items,
            { id: items.length + 1, checked: false, item: addedItem },
          ];
          e.preventDefault();
          setItems(newItems);
          localStorage.setItem("shoppinglist", JSON.stringify(newItems));
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
