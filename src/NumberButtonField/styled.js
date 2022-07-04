import styled from "styled-components";
import { css } from "styled-components";

export const StyledNumberButtonField = styled.div`
    position: relative;
    background-color: #ccc;
    border-radius: 10px;
    margin: 15px auto;
    width: 250px;
    height: 250px;
    transition: ease filter 0.3s;
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const NumberButtonFieldText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    margin: 20px auto;
    padding: 20px;
    line-height: 2em ;
    width: 80%;
    max-width: 600px;
    font-size: 20px;
    background-color: #f00;
    color: #fff;
    border-radius: 20px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`

export const NumberButton = styled.button`
    font-size: 60px;
    font-family: 'JetBrains Mono', monospace;
    width: 60px;
    padding: 6px;
    background-color: #090;
    color: #fff;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.3s;

    &:active{
        filter: brightness(1.5);
        transform: scale(1.2);
    }

    &:disabled{
        opacity: 0.2;
        background-color: #0e0;
        color: #aaa;
    }
`;