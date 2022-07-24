import styled from "styled-components";

export const StyledGameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: #fff;
    margin: 0 auto 10px;
    font-weight: 700;
    border-radius: 0 0 20px 20px;
`;

export const GameInfoParagraph = styled.p`
    margin: 5px;
    width: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const GameInfoParagraphIcon = styled.img`
    display: block;
    width: 24px;
`;

export const GameInfoParagraphText = styled.span`
    display: block;
    text-align: right;
`;