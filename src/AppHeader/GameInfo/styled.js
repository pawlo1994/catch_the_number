import styled from "styled-components";

export const StyledGameInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: #fff;
    margin: 20px 0;
    width: 30%;
    border-radius: 20px;

    @media(max-width: 767px){
        flex-direction: column;
    }
`;

export const GameInfoParagraph = styled.p`
    margin: 10px;
`;