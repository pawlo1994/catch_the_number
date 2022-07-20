import styled from "styled-components";

export const StyledGameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color: #333;
    color: #fff;
    margin: 0 auto 10px;
    font-weight: 700;
    font-size: 16px;
`;

export const GameInfoParagraph = styled.p`
    margin: 5px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const GameInfoParagraphIcon = styled.span`
    display: block;
    text-align: left;
`;

export const GameInfoParagraphText = styled.span`
    display: block;
    text-align: right;
`;