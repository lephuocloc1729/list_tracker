import "./App.css";
import { useState } from "react";
import { AddItem, Content, Footer, Header, SearchItem } from "./components";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );
  return (
    <main>
      <section>
        <Header />
      </section>
      <section className="flex justify-center my-4">
        <AddItem items={items} setItems={setItems} />
      </section>
      <section className="flex justify-center my-4">
        <SearchItem />
      </section>
      <section>
        <Content items={items} setItems={setItems} />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
