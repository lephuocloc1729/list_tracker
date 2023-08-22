import "./App.css";
import { useEffect, useState } from "react";
import { AddItem, Content, Footer, Header, SearchItem } from "./components";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist") || [])
  );

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  let filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (searchText) => {
    setSearchText(searchText);
  };

  const addItem = (addedItem) => {
    let newItems = [
      ...items,
      { id: items.length + 1, checked: false, item: addedItem },
    ];
    setItems(newItems);
  };

  const deleteItem = (id) => {
    let newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const completeTask = (id) => {
    let newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
  };

  return (
    <main>
      <section>
        <Header />
      </section>
      <section className="flex justify-center my-4">
        <AddItem onAdd={addItem} />
      </section>
      <section className="flex justify-center my-4">
        <SearchItem onSearch={handleSearchChange} />
      </section>
      <section>
        <Content
          items={filteredItems}
          onDelete={deleteItem}
          onComplete={completeTask}
        />
      </section>
      <section>
        <Footer itemAmount={items.length} />
      </section>
    </main>
  );
}

export default App;
