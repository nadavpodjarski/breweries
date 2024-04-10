import styled from "styled-components";
import { Card, Switch } from "../../../../components";
import { ChangeEvent, useState } from "react";
import { BreweryModal } from "../brewery-modal";
import { useBrewerisStore } from "../../store";

type BreweryCardProps = {
  brewery: any;
};

export const BreweryCard = ({ brewery }: BreweryCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { removeFavoriteBrewery, addFavoriteBrewery, favoriteBreweries } =
    useBrewerisStore();

  const handleFavortieOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) return addFavoriteBrewery(brewery);
    removeFavoriteBrewery(brewery);
  };

  return (
    <>
      <Card onClick={() => setIsModalOpen(true)}>
        <Content>
          <Name>{brewery.name}</Name>
          <Type>{brewery.brewery_type}</Type>
          <SwitchContainer>
            <Switch
              checked={!!favoriteBreweries[brewery.id]}
              onChange={handleFavortieOnChange}
            />
          </SwitchContainer>
        </Content>
      </Card>
      <BreweryModal
        brewery={brewery}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const Content = styled.div`
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
`;

const Name = styled.h3`
  margin: 0;
`;

const SwitchContainer = styled.div`
  margin-top: auto;
`;

const Type = styled.div``;
