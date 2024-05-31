import styled from "@emotion/styled";
type StyledProps = {
    isDark?:boolean
    doubleSection?:any
}
export const Container = styled.div`
    display:flex;
    width: -webkit-fill-available;
    flex-direction: column;
    background-color: ${({isDark}:StyledProps)=> isDark ? 'var(--tertiary-dark-color)' : ''};
`;

export const LogoContainer = styled.div`
    display:flex;
    padding: 30px;
    align-items:center;
    color: ${({isDark})=> isDark ? 'var(--secondary-dark-color)' : 'var(--secondary-color)'};
    background-color: ${({isDark}:StyledProps)=> isDark ? "var(--almost-black)" : 'var(--primary-dark-color)'};
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    
`;
export const VideosContainer = styled.div`
    
    display:flex;
    flex-direction:${({doubleSection}:StyledProps)=> doubleSection ? 'column' : 'row'};
    flex-wrap: ${({doubleSection}:StyledProps)=> !doubleSection ? 'wrap' : 'nowrap'};
    padding: 30px;
    gap:20px;
    background-color: ${({isDark}: StyledProps)=> isDark ? 'var(--dark-charcoal)':'var(--light-gray)'};
    

`;
