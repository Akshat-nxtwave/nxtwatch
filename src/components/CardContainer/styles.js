import styled from "@emotion/styled";
import { BANNER_IMAGE_URL } from '../../utils/constants';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    background:url(${BANNER_IMAGE_URL}) no-repeat center;
    background-size:cover;
    padding: 40px 80px 0;
`;


export const LogoContainer = styled.div`
    display:flex;
    
    width: -webkit-fill-available;
    
`;

export const Text = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size:18px;
  font-weight: 400;
  color: var(--dark-charcoal-2);
  padding: 20px 0;
  text-align: left;
  width: 380px;
  line-height: 24px;
`;

export const Button = styled.button`
  font-size: 16px;
  background: var(--primary-bg);
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border:1px solid var(--dark-gray-2);
  color: var(--dark-gray-2);
  margin: 30px 0;
  &:hover {
    background: var(--dark-gray-2);
    color: var(--primary-bg);
    transition: all 0.3s ease;
  }
`;
