import { StyledGameInfo } from "./styled.js"


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