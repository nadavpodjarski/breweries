import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.button`
  background-color: blue;
  appearance: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  border-radius: 25px;
  padding: 3px 12px;
  color: white;
  &:disabled {
    background-color: lightgray;
  }
`;
