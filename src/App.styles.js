import styled from "@emotion/styled";

export const OuterContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
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
    position: sticky;
    top: 100px;
    
`;
export const ContentSection = styled.div`
    display:flex;
    width: -webkit-fill-available;
    flex-direction: column;
    // overflow:scroll;
    // position:relative;

`
