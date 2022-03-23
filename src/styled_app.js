import styled from "styled-components";

export const GameStartButton = styled.button`
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
    font-size: 60px;
    padding: 0 20px;
    background-color: #090;
    color: #fff;
    border-radius: 5px;
    border: none;
    display: block;
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