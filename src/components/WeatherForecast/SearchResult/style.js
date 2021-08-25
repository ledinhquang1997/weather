import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from { 
    transform: translateY(50%);
    opacity: 0;
  } 
  to {
    transform: translateY(0);
    opacity: 1
  }
`;

export const Wrapper = styled.div`
  animation: ${appear} 0.5s;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
