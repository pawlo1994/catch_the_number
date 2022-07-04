import styled, { css } from "styled-components";

export const StyledGameStartButton = styled.button`
    padding: 10px;
    transition: ease box-shadow 0.3s;
    font-size: 20px;
    display: block;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 1px #ccc;

    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 2px 2px #aaa;
    }

    &:active{
        filter:brightness(1.25);
    }

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;