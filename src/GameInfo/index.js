import { StyledGameInfo } from "./styled"


export const GameInfo = ({ score, lives }) => (
    <StyledGameInfo>
        <p>
            🔢: {score}
        </p>
        <p>
            ❤️: {lives}
        </p>
    </StyledGameInfo>
);