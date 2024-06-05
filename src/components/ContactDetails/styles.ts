import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 16px 60px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 30px 0;
`;

export const Heading = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const Description = styled.div`
  font-size: 16px;
  white-space: pre-wrap;
  text-align: left;
  line-height: 24px;
  font-weight: 500;
  word-wrap: break-word;
  padding-bottom: 30px;
`;
