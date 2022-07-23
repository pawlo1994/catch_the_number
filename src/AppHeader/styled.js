import styled from "styled-components";

export const StyledAppHeader = styled.header`
    position: relative;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
    background-color: rgba(150,150,150,0.5);
`;

export const StyledAppHeaderContent = styled.h1`
    margin: 10px auto;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 5vw;
    font-weight: normal;
    text-shadow: 
     2px 2px 4px #eee,
     -2px -2px 4px #aaa,
     -2px 2px 4px #ddd,
     2px -2px 4px #999;
    padding: 5px;

    @media(min-width: 1280px){
        font-size: 64px;
    };
`;