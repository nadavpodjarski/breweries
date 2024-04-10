import styled, { css } from "styled-components";

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Card = ({ children, onClick }: CardProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.div<Pick<CardProps, "onClick">>`
  border-radius: 6px;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
  cursor: ${(p) => p.onClick && css`pointer`};
`;
