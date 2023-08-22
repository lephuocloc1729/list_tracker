const Content = ({ items, setItems, onComplete, onDelete }) => {
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
                onChange={() => onComplete(item.id)}
              />
              <div
                className={item.checked ? "line-through text-3xl" : "text-3xl"}
              >
                {item.item}
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-xl"
                onClick={() => onDelete(item.id)}
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
