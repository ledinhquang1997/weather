import React, { useContext } from 'react';

import spinnerGif from '../../../assets/spinner.gif';
import { AppContext } from '../../../context';
import { Container, Spinner } from './style';

const Loading = () => {
  const {
    state: { loading },
  } = useContext(AppContext);

  if (loading)
    return (
      <Container>
        <Spinner src={spinnerGif} alt="Spinner" />
      </Container>
    );

  return null;
};

export default Loading;
