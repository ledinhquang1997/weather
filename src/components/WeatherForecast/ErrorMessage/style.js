import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 5px 20px;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
