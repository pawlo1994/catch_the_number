import { useState } from "react";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <>
      <h2>
        Welcome to Jumping Numbers
      </h2>
      <button
        onClick={
          () => {
            setInterval(() => {
              setX(Math.ceil(Math.random() * 200));
              setY(Math.ceil(Math.random() * 100));
            }, 1000);
          }}
      >
        START
      </button>
      <button
        style={{
          display: "block",
          marginLeft: x,
          marginTop: y,
        }}
        onClick={
          () => {
            setX(Math.ceil(Math.random() * 200));
            setY(Math.ceil(Math.random() * 100));
          }
        }>
        5
      </button>
    </>
  );
}

export default App;
