import { StyledAppHeader, StyledAppHeaderContent } from "./styled.js";

export const AppHeader = ({ content }) => (
    <StyledAppHeader>
        <StyledAppHeaderContent>
            {content}
        </StyledAppHeaderContent>
    </StyledAppHeader>
);