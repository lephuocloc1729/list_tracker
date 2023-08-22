import Nav from "./challenges/Nav";
import Content from "./challenges/Content";
import { useEffect, useState } from "react";
const App1 = () => {
  const [topic, setTopic] = useState("users");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const API_URL = `https://jsonplaceholder.typicode.com/${topic}`;
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive the expected data");
        const fetchedData = await response.json();
        setData(fetchedData);
      };
      fetchData();
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [topic]);
  return (
    <>
      <nav className="w-full flex fixed">
        <Nav onClick={() => setTopic("users")}>users</Nav>
        <Nav onClick={() => setTopic("posts")}>posts</Nav>
        <Nav onClick={() => setTopic("comments")}>comments</Nav>
      </nav>
      <main className="relative top-10">
        {fetchError && <p className="text-red-500 text-center">{fetchError}</p>}
        {isLoading && <p className="text-3xl text-center">Loading...</p>}
        {!fetchError && !isLoading && <Content data={data} />}
      </main>
    </>
  );
};

export default App1;
