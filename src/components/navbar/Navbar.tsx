import styled from "styled-components";
import { routes } from "../../routes/routes";
import { CustomLink } from "../link";

export const Navbar = () => {
  return (
    <Container>
      <CustomLink to={routes.breweries}>Breweries</CustomLink>
      <CustomLink to={routes.favoriteBreweries}>Favorite Breweries</CustomLink>
    </Container>
  );
};

const Container = styled.div`
  height: 64px;
  padding: 0 24px;
  display: flex;
  gap: 8px;
  align-items: center;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
`;
