import { useSelector } from "react-redux";
import { selectIntervalTime, selectLives, selectScore } from "../gameStatsSlice.js";
import { StyledGameInfo } from "./styled.js"


export const GameInfo = () => {
    const score = useSelector(state => selectScore(state));
    const lives = useSelector(state => selectLives(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    return (
        <StyledGameInfo>
            <p>
                🔢: {score}
            </p>
            <p>
                ❤️: {lives}
            </p>
            <p>
                ⏳:{intervalTime / 1000}s
            </p>
        </StyledGameInfo>
    )
};