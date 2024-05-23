import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 0 0;
    background:transparent;
`

export const Heading = styled.div`
    font-size: 24px;
    padding: 24px;
    font-weight: 500;
    color: ${({isDark})=> isDark ? 'var(--secondary-dark-color)':'var(--secondary-color)'};
`



export const Description = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: ${({isDark})=> isDark ? 'var(--secondary-dark-color)':'var(--steel-gray)'};
    padding: 0 0 20px;
`

export const Button = styled.button`
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-dark-color);
    background-color: var(--vivid-blue);
    padding: 12px 26px;
    border-radius: 5px;
    border:none;
    outline:none;
    cursor: pointer;
`

