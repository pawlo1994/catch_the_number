import { useSelector } from "react-redux";
import { selectIntervalTime, selectLives, selectScore } from "../gameStatsSlice";
import {
    GameInfoParagraph,
    GameInfoParagraphIcon,
    GameInfoParagraphText,
    StyledGameInfo
} from "./styled.js"
import scoreImage from "./score.png";
import livesImage from "./lives.png";
import intervalImage from "./interval.png";
import highScoreImage from "./highscore.png";
import { useHighScore } from "../GameField/useHighScore";


export const GameInfo = () => {
    const score = useSelector(state => selectScore(state));
    const lives = useSelector(state => selectLives(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    const highScore = useHighScore();
    return (
        <StyledGameInfo>
            <GameInfoParagraph>
                <GameInfoParagraphIcon src={scoreImage} alt="score" />
                <GameInfoParagraphText>{score}</GameInfoParagraphText>
            </GameInfoParagraph>
            <GameInfoParagraph>
                <GameInfoParagraphIcon src={livesImage} alt="lives" />
                <GameInfoParagraphText>{lives}</GameInfoParagraphText>
            </GameInfoParagraph>
            <GameInfoParagraph>
                <GameInfoParagraphIcon src={intervalImage} alt="interval" />
                <GameInfoParagraphText>{intervalTime / 1000}s</GameInfoParagraphText>
            </GameInfoParagraph>
            <GameInfoParagraph>
                <GameInfoParagraphIcon src={highScoreImage} alt="interval" />
                <GameInfoParagraphText>{highScore}</GameInfoParagraphText>
            </GameInfoParagraph>
        </StyledGameInfo>
    )
};