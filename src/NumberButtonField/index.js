import { useDispatch, useSelector } from "react-redux";
import { increaseScore, selectIsGameStarted, selectLives, selectScore, selectX, selectY, setNewNumberButtonPosition } from "../gameStatsSlice";
import { NumberButton, NumberButtonFieldText, StyledNumberButtonField } from "./styled";

export const NumberButtonField = ({
    intervalID,
    changeIntervalTime,
    setCurrentIntervalTime }) => {
    const dispatch = useDispatch();
    const x = useSelector(state => selectX(state));
    const y = useSelector(state => selectY(state));
    const score = useSelector(state => selectScore(state));
    const lives = useSelector(state => selectLives(state));
    const isGameStarted = useSelector(state => selectIsGameStarted(state));
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
                        dispatch(setNewNumberButtonPosition());
                        dispatch(increaseScore());
                        clearInterval(intervalID.current);
                        score <= 100 && lives > 0 ?
                            changeIntervalTime(setCurrentIntervalTime(1000))
                            : score > 100 && score <= 200 && lives > 0
                                ? changeIntervalTime(setCurrentIntervalTime(500))
                                : changeIntervalTime(setCurrentIntervalTime(300));
                    }}
                    disabled={!isGameStarted || lives === 0}>
                    5
                </NumberButton>
            </StyledNumberButtonField>
            <NumberButtonFieldText
                hidden={lives !== 0}
            >
                {lives === 0 ? "game over. click on 🔁 button, then click on button with number to try again" : null}
            </NumberButtonFieldText>
        </>
    )
};