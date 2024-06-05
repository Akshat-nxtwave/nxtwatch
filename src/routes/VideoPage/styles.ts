import styled from "@emotion/styled";
type Props = {
  isDark: Boolean | null;
};
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  height: 87vh;
  padding: 20px 40px;
  background-color: ${({ isDark }: Props) =>
    isDark ? "var(--tertiary-dark-bg)" : "var(--whitish-gray)"};
  text-align: left;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 20px;
  color: ${({ isDark }: Props) =>
    isDark ? "var(--secondary-dark-color)" : "var(--dark-gray-2)"};
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  color: ${({ isDark }: Props) => (isDark ? "var(--secondary-bg)" : "#040404")};

  &.light {
    font-weight: 300;
    color: ${({ isDark }: Props) =>
      isDark ? "var(--whitish-charcoal)" : "#2f2f2f"};
  }
`;
export const Features = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  color: ${({ isDark }: Props) =>
    isDark ? "var(--lighter-gray)" : "var(--dark-charcoal-2)"};
  width: 60vw;
  border-bottom: 1.5px solid var(--lighter-charcoal);
`;
export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Channel = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: flex-start;
  gap: 20px;
`;

export const DescriptionText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
