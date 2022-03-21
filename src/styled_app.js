import styled from "styled-components";

export const AppHeader = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: normal;
    text-shadow: 2px 2px 0px #999;
`;

export const GameStartButton = styled.button`
    transition: ease 0.3s ;
    font-size: 20px;
    display: block;
    margin: 0 auto;
    border: none;
    box-shadow: 0px 0px 1px 1px #ccc;

    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 2px 2px #aaa;
    }

    &:active{
        filter:brightness(1.25);
    }
`;

export const NumberButtonField = styled.div`
    position: relative;
    background-color: #ccc;
    border-radius: 10px;
    margin: 15px auto;
    width: 80%;
    max-width: 600px;
    height: 200px;
`;

export const NumberButton = styled.button`
    width: 30px;
    height: 30px;
    font-size: 24px;
    display: block;
    position: relative;
`;