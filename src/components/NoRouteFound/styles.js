import styled from "@emotion/styled";

export const Container = styled.div`
    display:flex;
    width: -webkit-fill-available;
    flex-direction: column;
    height: 83vh;
    padding:40px 0;
    background-color: ${({isDark}) => isDark ? "var(--almost-black)" : "var(--primary-bg)"};


`