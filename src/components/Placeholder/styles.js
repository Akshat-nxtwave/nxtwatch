import styled from "@emotion/styled";

export const Container = styled.div`
    height: ${({height})=>height};
    width: ${({width})=>width};
    border-radius: ${({rounding})=>rounding};
    background-color: var(--neutral-gray);
    margin:20px;
`

