import { useState } from "react";

const SearchItem = ({ items, setItems }) => {
  return (
    <form>
      <input
        type="text"
        className="text-xl py-2 rounded-full px-4 border-[1px] border-slate-300 focus:outline-red-500 focus:outline"
        placeholder="Search item"
        onChange={(e) => {
          setItems(items.filter((item) => item.item.includes(e.target.value)));
        }}
      />
    </form>
  );
};

export default SearchItem;
