import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

type CustomLinkProps = {
  children: React.ReactNode;
} & NavLinkProps;

export const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled(NavLink)`
  text-decoration: none;
  border-radius: 25px;
  padding: 3px 12px;
  color: black;
  &:hover,
  &.active {
    background-color: black;
    color: white;
  }
`;
