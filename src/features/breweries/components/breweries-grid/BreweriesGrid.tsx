import styled from "styled-components";
import { BreweryCard } from "../brewery-card/BreweryCard";
import { forwardRef } from "react";

type BreweriesGridProps = {
  breweries: Array<any>;
};

export const BreweriesGrid = forwardRef<HTMLDivElement, BreweriesGridProps>(
  ({ breweries }, ref) => {
    if (!breweries.length) return <NoData>No Breweries To Show</NoData>;
    return (
      <Container ref={ref}>
        {breweries.map((b) => (
          <BreweryCard key={b.id} brewery={b} />
        ))}
      </Container>
    );
  }
);

const NoData = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
