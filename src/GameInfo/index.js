import { StyledGameInfo } from "./styled.js"


export const GameInfo = ({ score, lives, currentIntervalTime }) => {
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
        </StyledGameInfo >
    )
};