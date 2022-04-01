import { useRef } from "react";
import { GameStartButton } from "./styled_app.js";
import { GlobalStyle } from "./globalStyle.js";
import { AppHeader } from "./AppHeader";
import { GameInfo } from "./GameInfo";
import { NumberButtonField } from "./NumberButtonField/index.js";
import { useChangeIntervalTime } from "./useChangeIntervalTime.js";
import { useDispatch, useSelector } from "react-redux";
import { resetScoreAndLives, selectIntervalTime, selectIsGameStarted, selectLives, toggleIsGameStarted, setNewIntervalTime } from "./gameStatsSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector(state => selectIsGameStarted(state));
  const lives = useSelector(state => selectLives(state));
  const intervalTime = useSelector(state => selectIntervalTime(state));
  const intervalID = useRef(null);
  console.log(intervalTime);

  const { changeIntervalTime } = useChangeIntervalTime(intervalID);
  return (
    <>
      <GlobalStyle />
      <AppHeader content="c4tch th3 numb3r" />
      <GameInfo />
      <GameStartButton
        onClick={
          () => {
            dispatch(toggleIsGameStarted());
            dispatch(setNewIntervalTime(1000));
            if (lives !== 0 && !isGameStarted) {
              changeIntervalTime(intervalTime);
            }
            else {
              dispatch(toggleIsGameStarted());
              dispatch(resetScoreAndLives());
              clearInterval(intervalID.current);
            }
          }
        }
        hidden={isGameStarted && lives !== 0}
      >
        {!isGameStarted ? "▶️" : "🔁"}
      </GameStartButton>
      <NumberButtonField
        intervalID={intervalID}
        changeIntervalTime={changeIntervalTime}
      />
    </>
  );
}

export default App;
