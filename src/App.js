import { useState } from "react";
import { AppHeader, GameStartButton, NumberButton, NumberButtonField } from "./styled_app";

const App = () => {
  const [intervalID, setIntervalID] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);

  return (
    <>
      <AppHeader>
        Welcome to Jumping Numbers
      </AppHeader>
      <GameStartButton
        onClick={
          () => {
            setIsGameStarted(!isGameStarted);
            !isGameStarted ?
              setIntervalID(setInterval(() => {
                setX(Math.ceil(Math.random() * 200));
                setY(Math.ceil(Math.random() * 100));
              }, 1000)) : clearInterval(intervalID);
          }}
      >
        {!isGameStarted ? "START" : "STOP"}
      </GameStartButton>
      <NumberButtonField>
        <NumberButton
          style={{
            left: x > 200 ? x - 40 : x,
            top: y > 300 ? y - 40 : y,
          }}
          onClick={
            () => {
              setX(Math.ceil(Math.random() * 200) + 10);
              setY(Math.ceil(Math.random() * 100) + 10);
            }
          }
          disabled={!isGameStarted}>
          5
        </NumberButton>
      </NumberButtonField>
    </>
  );
}

export default App;
