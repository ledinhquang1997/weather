import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { media } from '../../../common/styles/media';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ${media.lessThan('tablet')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const WeatherStateCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 80px;

  ${media.lessThan('tablet')`
    align-items: center;
    padding-right: 0;
  `}
`;

export const WeatherStatisticCard = styled.div`
  display: flex;
  width: 500px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  flex-wrap: wrap;

  ${media.lessThan('tablet')`
    margin-top: 50px;
    padding: 20px 0;
  `}

  ${media.lessThan('mobile')`
    margin-top: 50px;
    width: 100%;
    padding: 20px 0;
  `}
`;

export const Box = styled.div`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`;

export const City = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
`;

export const Day = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 200;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
`;
export const WeatherImage = styled.img`
  margin-top: 20px;
  height: 200px;
  align-self: center;
`;

export const WeatherState = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
  align-self: center;
`;

export const Value = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
`;
