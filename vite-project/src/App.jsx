import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button/Button.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isVisable, setIsVisable] = useState(true);
  const [titleButton, setTitleButton] = useState("count is");
  const [value, setValue] = useState("");
  console.log(value);

  const data = [
    {
      title: "Первый комментарий",
      id: 1,
    },
    {
      title: "Второй комментарий",
      id: 2,
    },
    {
      title: "Третий комментарий",
      id: 3,
    },
    {
      title: "Четвертый комментарий",
      id: 4,
    },
  ];

  const [comments, setComments] = useState(data);
  const [idComment, setIdComment] = useState(5);

  const addNewComment = () => {
    setIdComment((id) => id + 1);
    const newComment = {
      title: "Новый комментарий 4 5 6",
      id: idComment,
    };
    setComments([...comments, newComment]);
  };

  const handleInput = (event) => {
    setValue(event);
    value.length > 5 && setIsVisable((state) => !state);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {!isVisable && <h1>Vite + React</h1>}
      <div>
        <ul>
          {comments.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
      <button onClick={addNewComment}>Добавить новый комментарий</button>
      <Button
        countValue={count}
        setCountValue={setCount}
        titleButton={titleButton}
      />
      <div className="card">
        <button onClick={() => setIsVisable((state) => !state)}>
          Показать заголовок
        </button>
        <button onClick={() => setTitleButton((state) => "Click me")}>
          Поменять название кнопки
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => handleInput(e.target.value)}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
