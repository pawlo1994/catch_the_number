import { StyledAppHeader, StyledAppHeaderContent } from "./styled.js";
import { GameInfo } from "./GameInfo";

export const AppHeader = ({ content }) => (
    <StyledAppHeader>
        <StyledAppHeaderContent>
            {content}
        </StyledAppHeaderContent>
        <GameInfo />
    </StyledAppHeader>
);