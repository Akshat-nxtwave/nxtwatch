import styled from "@emotion/styled";
export const ModalContainer = styled.div`

position: fixed;
z-index: 9999;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
overflow: auto;
`; 

export const Title = styled.div`
   color: ${({isDark})=> isDark ? 'var(--off-white)':'var(--deep-blue)'};
   padding: 20px 0 40px;
`;

export const ModalContent = styled.div`
   background-color: ${({isDark})=> isDark ? 'var(--secondary-dark-bg)':'#fefffe'};
   margin: 10% auto;
   width: 20%;
   border-radius: 8px;
   display:flex;
   padding: 10px;
   align-items: center;
   flex-direction:column;
   justify-content: center;
`;

export const ButtonBox = styled.div`
 
   display: flex;
   justify-content: space-between;
   cursor: pointer;
   width: 60%;
   padding-bottom:30px;
`;

export const Button = styled.div`

   padding:10px 14px;
   border: 1px solid black;
    display:flex;
    align-items: center;
    justify-content: center;
    color: var(--smoky-gray);
    font-weight: 500;
    border-radius: 2px;
    border: 1px solid var(--smoky-gray);
    &:hover{
        background-color: var(--smoky-gray);
        color: var(--primary-bg);
    }
    &.primary{
        background-color: var(--bright-blue);
        color: var(--primary-bg);
        border-color: var(--bright-blue);
        &:hover{
            color: var(--bright-blue);
            background-color: var(--deep-blue);
        }
    }
`;
