import { useDispatch, useSelector } from "react-redux";
import {
    changeCurrentGameState,
    setNewIntervalTime,
    selectLives,
    selectX,
    selectY,
    selectIntervalTime,
    selectScore,
    toggleIsGameStarted,
    selectIsGameStarted
} from "../gameStatsSlice";
import {
    GameFieldButton,
    StyledGameField
} from "./styled";

export const GameField = ({ intervalID, changeIntervalTime }) => {
    const dispatch = useDispatch();
    const x = useSelector(state => selectX(state));
    const y = useSelector(state => selectY(state));
    const lives = useSelector(state => selectLives(state));
    const score = useSelector(state => selectScore(state));
    const isGameStarted = useSelector(state => selectIsGameStarted(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    if (lives === 0 && isGameStarted) {
        dispatch(toggleIsGameStarted());
    }
    return (
        <StyledGameField
            gameOver={lives === 0}
        >
            {(lives !== 0)
                ?
                <GameFieldButton
                    style={{
                        transform: `translate(${x}px, ${y}px)`,
                    }}
                    onClick={() => {
                        if (!isGameStarted) {
                            dispatch(toggleIsGameStarted());
                        }
                        dispatch(changeCurrentGameState(lives));
                        clearInterval(intervalID.current);
                        changeIntervalTime(intervalTime);
                        if (score === 100) {
                            dispatch(setNewIntervalTime(800));
                        }
                        if (score === 200) {
                            dispatch(setNewIntervalTime(600));
                        }
                        if (score === 300) {
                            dispatch(setNewIntervalTime(400));
                        }
                        if (score === 400) {
                            dispatch(setNewIntervalTime(200));
                        }
                    }}
                    disabled={!isGameStarted}>
                    5
                </GameFieldButton>
                :
                `game over. click on restart button to try again`
            }
        </StyledGameField>
    )
};