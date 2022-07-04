import { useRef } from "react";
import { GameStartButton } from "./GameStartButton/index";
import { GlobalStyle } from "./globalStyle.js";
import { AppHeader } from "./AppHeader";
import { NumberButtonField } from "./NumberButtonField/index.js";
import { Footer } from "./Footer/index.js";
import { useChangeIntervalTime } from "./useChangeIntervalTime.js";

const App = () => {
  const intervalID = useRef(null);
  const { changeIntervalTime } = useChangeIntervalTime(intervalID);

  return (
    <>
      <GlobalStyle />
      <AppHeader content="c4tch th3 numb3r" />
      <GameStartButton
        intervalID={intervalID}
        changeIntervalTime={changeIntervalTime}
      />
      <NumberButtonField
        intervalID={intervalID}
        changeIntervalTime={changeIntervalTime}
      />
      <Footer content="Copyright &copy; Pawlo1994 2022" />
    </>
  );
}

export default App;
