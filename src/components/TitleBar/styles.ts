import styled from "@emotion/styled";
import { Link } from "react-router-dom";
type Props = {
  isDark: boolean;
};
export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 80px;
  background-color: ${({ isDark }: Props) =>
    isDark ? "var(--secondary-dark-bg)" : "var(--primary-bg)"};
  position: sticky;
  top: 0px;
`;
export const Button = styled.button`
  display: flex;
  outline: none;
  border: 1px solid var(--bright-blue);
  border-radius: 4px;
  align-items: center;
  color: var(--bright-blue);
  font-size: 16px;
  padding: 10px 20px;
  height: 40px;
  background-color: ${({ isDark }: Props) =>
    isDark ? "var(--almost-black)" : "var(--primary-bg)"};
  cursor: pointer;
  :hover {
    background-color: var(--bright-blue);
    color: var(--primary-bg);
    transition: all 0.3s ease;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  underline: none;
`;
