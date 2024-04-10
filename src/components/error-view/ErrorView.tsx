import styled from "styled-components";

export const ErrorView = () => {
  return <Container>Sorry, Sometihng went wrong...</Container>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
