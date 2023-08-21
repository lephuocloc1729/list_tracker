import "./App.css";
import { useState } from "react";
import { AddItem, Content, Footer, Header, SearchItem } from "./components";
function App() {
  const [color, setColor] = useState("");
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
