import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`;


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width:350px;
    box-shadow: 0 0 4px 4px ${({isDark})=>isDark ? 'var(--dark-gray)' : 'var(--whitish-gray)'};
    padding: 40px;
    border-radius:8px;
    transform: translateX(-75%);
    background-color: ${({isDark})=>isDark ? 'var(--primary-color)' : 'var(--primary-bg)'};
    color: ${({isDark})=>isDark ? 'var(--primary-dark-color' : 'var(--grayish-blue)'};
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    width:100%;
    text-align:start;
    
`;

export const InputField = styled.input`
    width: 100%;
    height: 40px;
    box-sizing:border-box;
    border: 1px solid var(--blue-gray);
    border-radius: 5px;
    font-size: 16px;
    outline:none;
    padding: 10px;
    background-color: ${({isDark})=>isDark ? 'var(--primary-color)' : 'var(--primary-bg)'};
    color: ${({isDark})=>isDark ? 'var(--primary-dark-color)' : 'var(--grayish-blue)'};
`;


export const Checkbox = styled.div`
display:flex;
gap:4px;
width:100%;
accent-color: var(--bright-red);
align-items:center;
cursor:pointer;
`;

export const ErrorMsg = styled.div`
display:flex;
color: var(--bright-red);
font-size:12px;
width:100%;

`;

export const Button = styled.button`
    background-color:var(--bright-blue);
    color: var(--primary-dark-color);
    font-size: 16px;
    width: 100%;
    height: 40px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    border:none;
`;

