import styled from "@emotion/styled";


export const OuterContainer = styled.div`
    display: flex;
    // overflow:hidden;
    // position:fixed;
    
`;


export const NavigationSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 150px);
    padding:40px 0 0;
    width: 20%;
    
`;
export const ContentSection = styled.div`
    display:flex;
    width: -webkit-fill-available;
    flex-direction: column;
    background-color: ${({isDark}) => isDark ? "var(--primary-dark-bg)" : "var(--primary-bg)"};
    // overflow:scroll;
    // position:relative;

`
