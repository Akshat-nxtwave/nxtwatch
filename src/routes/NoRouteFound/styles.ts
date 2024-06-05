import styled from "@emotion/styled";
type Props = {
  isDark: Boolean | null;
};
export const Container = styled.div`
  display: flex;
  width: -webkit-fill-available;
  flex-direction: column;
  height: 83vh;
  padding: 40px 0;
  background-color: ${({ isDark }: Props) =>
    isDark ? "var(--almost-black)" : "var(--primary-bg)"};
`;
