import styled from 'styled-components';

import { media } from '../../../common/styles/media';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(20% - 60px);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px 0;
  margin: 10px 30px;

  ${media.lessThan('tablet')`
    margin: 10px 30px;
    width: calc(33.33% - 60px);
  `}

  ${media.lessThan('mobile')`
    margin: 10px 20px;
    width: calc(50% - 40px);
  `}
`;

export const Text = styled.p`
  margin: 0;
`;

export const Day = styled(Text)`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;

export const WeatherState = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Temperature = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 200;
`;

export const WeatherImage = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
