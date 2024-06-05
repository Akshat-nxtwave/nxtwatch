import styled from "@emotion/styled";
type Props = {
  isDark: boolean;
};
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid var(--smoky-gray);
  width: 30%;
  background-color: ${({ isDark }: Props) =>
    isDark ? "var(--tertiary-dark-color)" : "transparent"};
  outline: none;
  color: ${({ isDark }: Props) =>
    isDark ? "var(--very-light-gray)" : "var(--dark-charcoal)"};
`;

export const Button = styled.button`
  padding: 7px 20px;
  border: 1px solid var(--smoky-gray);
  color: ${({ isDark }: Props) =>
    isDark ? "var(--blue-gray)" : "var(--dark-charcoal)"};
  background-color: ${({ isDark }: Props) => (isDark ? "var(--charcoal)" : "")};
  &:hover {
    background-color: var(--off-white);
    cursor: pointer;
    border: 1px solid var(--off-white);
    transition: all 0.3s ease;
  }
`;
