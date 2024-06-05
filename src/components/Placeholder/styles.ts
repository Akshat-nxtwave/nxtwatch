import styled from "@emotion/styled";
type Props = {
  height?: string;
  width?: string;
  rounding?: string;
};
export const Container = styled.div`
  height: ${({ height }: Props) => height};
  width: ${({ width }: Props) => width};
  border-radius: ${({ rounding }: Props) => rounding};
  background-color: var(--neutral-gray);
  margin: 20px;
`;
