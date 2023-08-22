const Content = ({ items, setItems }) => {
  const deleteItem = (id) => {
    let newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const completeTask = (id) => {
    let newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  return (
    <main>
      <ul>
        {items.length ? (
          items.map((item) => (
            <li
              key={item.id}
              className={"flex justify-around items-center my-3"}
            >
              <input
                type="checkbox"
                id={item.id}
                className="text-4xl"
                checked={item.checked}
                onChange={() => completeTask(item.id)}
              />
              <div
                className={item.checked ? "line-through text-3xl" : "text-3xl"}
              >
                {item.item}
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-xl"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-2xl text-slate-600 text-center">
            Your list is empty
          </p>
        )}
      </ul>
    </main>
  );
};

export default Content;
