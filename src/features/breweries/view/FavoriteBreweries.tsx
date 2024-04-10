import styled from "styled-components";
import { BreweriesGrid } from "../components";
import { useBrewerisStore } from "../store";
import { useMemo, useState } from "react";
import { ConfirmModal } from "../../../components/confirm-modal";
import { Button } from "../../../components/button";

export const FavoriteBreweries = () => {
  const { favoriteBreweries, removeAllFavoriteBreweries } = useBrewerisStore();
  const [isRemoveAllModalOpen, setIsRemoveAllModalOpen] = useState(false);

  const hasFavorites = useMemo(
    () => !!Object.keys(favoriteBreweries).length,
    [favoriteBreweries]
  );

  if (!hasFavorites) return <NoData>No Favorite Breweries Selected</NoData>;

  return (
    <>
      <Container>
        {hasFavorites && (
          <RemoveAllButton onClick={() => setIsRemoveAllModalOpen(true)}>
            Remove All
          </RemoveAllButton>
        )}
        <BreweriesGrid breweries={Object.values(favoriteBreweries)} />
      </Container>
      <ConfirmModal
        isOpen={isRemoveAllModalOpen}
        onClose={() => setIsRemoveAllModalOpen(false)}
        onConfirm={() => removeAllFavoriteBreweries()}
        title="Are you sure you want to remove all favortie breweries"
      />
    </>
  );
};

const NoData = styled.div``;

const Container = styled.div``;

const RemoveAllButton = styled(Button)`
  margin-bottom: 24px;
`;
