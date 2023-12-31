import "./App.css";
import { useEffect, useState } from "react";
import { AddItem, Content, Footer, Header, SearchItem } from "./components";
import apiRequest from "./apiRequest";
function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive the expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 1000);
  }, []);

  let filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (searchText) => {
    setSearchText(searchText);
  };

  const addItem = async (addedItem) => {
    let newItem = { id: items.length + 1, checked: false, item: addedItem };
    setItems([...items, newItem]);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const deleteItem = async (id) => {
    let newItems = items.filter((item) => item.id !== id);
    setItems(newItems);

    const deleteOptions = {
      method: "DELETE",
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const completeTask = async (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    let completeItem = items.filter((item) => item.id === id);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: !completeItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
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
      <main>
        {isLoading && <p className="text-center">Loading items ...</p>}
        {fetchError && (
          <p className="text-red-500 text-center">Error:{fetchError}</p>
        )}
        {!fetchError && !isLoading && (
          <Content
            items={filteredItems}
            onDelete={deleteItem}
            onComplete={completeTask}
          />
        )}
      </main>
      <section>
        <Footer itemAmount={items.length} />
      </section>
    </main>
  );
}

export default App;
