import styled from 'styled-components';

import backgroundImg from '../../../assets/bg.jpg';
import { media } from '../../../common/styles/media';
// import { media } from '../../../common/styles/media';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1000px;

  ${media.lessThan('tablet')`
    min-height: 2000px;
  `}
`;

export const Title = styled.h1`
  display: ${({ showResults }) => (!showResults ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.white};
  font-size: 5rem;
  position: relative;
  top: 15%;
`;

export const SubTitle = styled.h3`
  display: ${({ showResults }) => (showResults ? 'block' : 'none')};
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  top: 0;
  left: 20px;
`;
