import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const Container = styled.div`

`

export const InnerContainer = styled(Link)`
    text-decoration:none;
    display: flex;
    align-items:center;
    padding: 10px 20px;
    cursor:pointer;
    
    font-weight: 500;
        color: ${({isDark}) => isDark ? "var(--off-white)" : "var(--dark-gray)"};
    &:hover{
        background-color: #e7f0f9;
        color: var(--secondary-color)
    }
    &.active{
        font-weight: 600;
        color: var(--smoky-color);
        background-color: var(--primary-bg);
        color: var(--secondary-color);
    }
    
`;

export const Text = styled.div`
    
    margin-left: 30px;
`;

