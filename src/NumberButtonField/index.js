import { NumberButton, NumberButtonFieldText, StyledNumberButtonField } from "./styled";

export const NumberButtonField = ({
    lives,
    intervalID,
    x,
    y,
    score,
    setScore,
    setIntervalTime,
    setX,
    setY,
    isGameStarted }) => (
    <>
        <StyledNumberButtonField
            hidden={lives === 0}
        >
            <NumberButton
                style={{
                    left: x > 200 ? x - 40 : x,
                    top: y > 300 ? y - 40 : y,
                }}
                onClick={() => {
                    setX(Math.ceil(Math.random() * 200) + 10);
                    setY(Math.ceil(Math.random() * 100) + 10);
                    setScore(score + 5);
                    clearInterval(intervalID.current);
                    score <= 100 && lives > 0 ?
                        setIntervalTime(1000)
                        : score > 100 && score <= 200 && lives > 0
                            ? setIntervalTime(500)
                            : setIntervalTime(300);
                }}
                disabled={!isGameStarted || lives === 0}>
                5
            </NumberButton>
        </StyledNumberButtonField>
        <NumberButtonFieldText
            hidden={lives !== 0}
        >
            {lives === 0 ? "game over. click on ⏹️ button, then click on ▶️ button to try again" : null}
        </NumberButtonFieldText>
    </>
);