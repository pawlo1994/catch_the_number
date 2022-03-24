import styled from "styled-components";

export const StyledAppHeader = styled.header`
    margin: 20px 0;
    padding: 10px 0;
    text-align: center;
    background-color: #aaa;
`;

export const StyledAppHeaderContent = styled.h1`
    text-transform: uppercase ;
    font-size: 40px;
    font-weight: normal;
    text-shadow: 
     2px 2px 2px #f00,
     -2px -2px 2px #0f0,
     -2px 2px 2px #00f,
     2px -2px 2px #ff0;
    filter: blur(1px);
`