import { StyledAppHeader, StyledAppHeaderContent } from "./styled";

export const AppHeader = ({ content }) => (
    <StyledAppHeader>
        <StyledAppHeaderContent>
            {content}
        </StyledAppHeaderContent>
    </StyledAppHeader>
);