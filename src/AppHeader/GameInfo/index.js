import { useSelector } from "react-redux";
import { selectIntervalTime, selectLives, selectScore } from "../../gameStatsSlice";
import { GameInfoParagraph, StyledGameInfo } from "./styled.js"


export const GameInfo = () => {
    const score = useSelector(state => selectScore(state));
    const lives = useSelector(state => selectLives(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    return (
        <StyledGameInfo>
            <GameInfoParagraph>
                🔢: {score}
            </GameInfoParagraph>
            <GameInfoParagraph>
                ❤️: {lives}
            </GameInfoParagraph>
            <GameInfoParagraph>
                ⏳:{intervalTime / 1000}s
            </GameInfoParagraph>
        </StyledGameInfo>
    )
};