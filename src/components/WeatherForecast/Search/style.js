import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { media } from '../../../common/styles/media';

export const Wrapper = styled.form`
  transition: 0.8s;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  top: ${({ showResults }) => (showResults ? '0%' : '15%')};
  margin-top: ${({ showResults }) => (showResults ? '70px' : '0')};
`;

export const Input = styled.input`
  width: 400px;
  height: 20px;
  font-size: 16px;
  padding: 10px 15px 10px 20px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:focus {
    color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  ${media.lessThan('mobile')`
     width: 200px
  `}
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
  }

  ${media.lessThan('tablet')`
    right: 0;
  `}

  ${media.lessThan('tablet')`
    right: 10px;
  `}
`;
