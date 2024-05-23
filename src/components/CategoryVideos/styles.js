import styled from "@emotion/styled";

export const Container = styled.div`
    display:flex;
    width: -webkit-fill-available;
    flex-direction: column;
    background-color: ${({isDark})=> isDark ? 'var(--tertiary-dark-color)' : ''};
`;

export const LogoContainer = styled.div`
    display:flex;
    padding: 30px;
    align-items:center;
    color: ${({isDark})=> isDark ? 'var(--secondary-dark-color)' : 'var(--secondary-color)'};
    background-color: ${({isDark})=> isDark ? "var(--almost-black)" : 'var(--primary-dark-color)'};
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    
`;
export const VideosContainer = styled.div`
    
    display:flex;
    flex-direction:${({doubleSection})=> doubleSection ? 'column' : 'row'};
    flex-wrap: ${({doubleSection})=> !doubleSection ? 'wrap' : 'nowrap'};
    padding: 30px;
    gap:20px;
    background-color: ${({isDark})=> isDark ? 'var(--dark-charcoal)':'var(--light-gray)'};
    

`;
