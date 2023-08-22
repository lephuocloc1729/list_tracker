import { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [addedItem, setAddedItem] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(addedItem);
        setAddedItem("");
      }}
    >
      <input
        type="text"
        placeholder="Add item"
        className="py-2 px-4 text-xl rounded-full border-[1px] border-slate-300 focus:outline-black focus:outline"
        value={addedItem}
        onChange={(e) => setAddedItem(e.target.value)}
        required
      />
      <button className="px-6 py-2 text-xl rounded-full bg-slate-700 text-white">
        Add
      </button>
    </form>
  );
};

export default AddItem;
