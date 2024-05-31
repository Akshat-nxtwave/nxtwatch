import styled from "@emotion/styled";
type Props = {
    isDark: boolean
}
export const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: ${({isDark}:Props)=> isDark ? 'var(--tertiary-dark-bg)': 'var(--whitish-gray)'};
    padding: 20px 80px;
    height: -webkit-fill-available;
`

export const VideosBox = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap: 20px;
    width: 100%;
    
`
