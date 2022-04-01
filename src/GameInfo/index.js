import { useSelector } from "react-redux";
import { selectLives, selectScore } from "../gameStatsSlice.js";
import { StyledGameInfo } from "./styled.js"


export const GameInfo = ({ currentIntervalTime }) => {
    const score = useSelector(state => selectScore(state));
    const lives = useSelector(state => selectLives(state));
    return (
        <StyledGameInfo>
            <p>
                🔢: {score}
            </p>
            <p>
                ❤️: {lives}
            </p>
            <p>
                ⏳:{currentIntervalTime / 1000}s
            </p>
        </StyledGameInfo>
    )
};