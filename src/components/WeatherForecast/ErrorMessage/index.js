import { useAppContext } from '../../../hooks/useAppContext';
import { Message, Wrapper } from './style';

const ErrorMessage = () => {
  const {
    state: { error },
  } = useAppContext();

  return (
    error && (
      <Wrapper>
        <Message>{error}</Message>
      </Wrapper>
    )
  );
};

export default ErrorMessage;
