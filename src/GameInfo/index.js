import { useSelector } from "react-redux";
import { selectIntervalTime, selectLives, selectScore } from "../gameStatsSlice";
import { GameInfoParagraph, GameInfoParagraphIcon, GameInfoParagraphText, StyledGameInfo } from "./styled.js"


export const GameInfo = () => {
    const score = useSelector(state => selectScore(state));
    const lives = useSelector(state => selectLives(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    return (
        <StyledGameInfo>
            <GameInfoParagraph>
                <GameInfoParagraphIcon>🔢</GameInfoParagraphIcon>
                <GameInfoParagraphText>{score}</GameInfoParagraphText>
            </GameInfoParagraph>
            <GameInfoParagraph>
                <GameInfoParagraphIcon>❤️</GameInfoParagraphIcon>
                <GameInfoParagraphText>{lives}</GameInfoParagraphText>
            </GameInfoParagraph>
            <GameInfoParagraph>
                <GameInfoParagraphIcon>⏳</GameInfoParagraphIcon>
                <GameInfoParagraphText>{intervalTime / 1000}s</GameInfoParagraphText>
            </GameInfoParagraph>
        </StyledGameInfo>
    )
};