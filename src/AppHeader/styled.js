import styled from "styled-components";

export const StyledAppHeader = styled.header`
    position: relative;
    margin: 20px auto;
    width: 80%;
    padding: 10px 0;
    text-align: center;
    background-color: #aaa;
    border-radius: 20px;
`;

export const StyledAppHeaderContent = styled.h1`
    margin: 10px auto;
    width: 80%;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: normal;
    text-shadow: 
     2px 2px 2px #f00,
     -2px -2px 2px #0f0,
     -2px 2px 2px #00f,
     2px -2px 2px #ff0;
    filter: blur(1px);
    background-color: #ccc;
    padding: 10px;
    border-radius: 20px;

    @media(max-width: 767px){
        font-size: 28px;
    }
`