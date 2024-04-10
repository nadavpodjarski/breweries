import styled, { keyframes } from "styled-components";

export const Loader = () => {
  return (
    <Container>
      <LoaderWrapper />
    </Container>
  );
};

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

const LoaderWrapper = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #3498db;
  animation: ${spin} 1s linear infinite;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
