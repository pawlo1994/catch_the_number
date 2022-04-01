import { useDispatch, useSelector } from "react-redux";
import { setNewIntervalTime, increaseScore, selectIsGameStarted, selectLives, selectX, selectY, setNewNumberButtonPosition, selectIntervalTime, selectScore } from "../gameStatsSlice";
import { NumberButton, NumberButtonFieldText, StyledNumberButtonField } from "./styled";

export const NumberButtonField = ({ intervalID, changeIntervalTime }) => {
    const dispatch = useDispatch();
    const x = useSelector(state => selectX(state));
    const y = useSelector(state => selectY(state));
    const lives = useSelector(state => selectLives(state));
    const score = useSelector(state => selectScore(state));
    const isGameStarted = useSelector(state => selectIsGameStarted(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    return (
        <>
            <StyledNumberButtonField
                hidden={lives === 0}
            >
                <NumberButton
                    style={{
                        transform: `translate(${x}px, ${y}px)`,
                    }}
                    onClick={() => {
                        dispatch(setNewNumberButtonPosition(lives));
                        dispatch(increaseScore());
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
                        if (lives === 0) {
                            clearInterval(intervalID.current);
                        }
                    }}
                    disabled={!isGameStarted || lives === 0}>
                    5
                </NumberButton>
            </StyledNumberButtonField>
            <NumberButtonFieldText
                hidden={lives !== 0}
            >
                {lives === 0
                    ? "game over. click on 🔁 button, then click on button with number to try again"
                    : null}
            </NumberButtonFieldText>
        </>
    )
};