import styled from "styled-components";
import { Modal, ModalProps } from "../../../../components";

type BreweryModalProps = {
  brewery: any;
} & Pick<ModalProps, "isOpen" | "onClose">;

export const BreweryModal = ({
  brewery,
  isOpen,
  onClose,
}: BreweryModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Content>
        <Header>{brewery.name}</Header>
        <Divider />
        <Details>
          <Detail>
            <DetailTitle>Address:</DetailTitle>
            <DetailContent>
              {brewery.country}, {brewery.state}, {brewery.city}
            </DetailContent>
          </Detail>
          <Detail>
            <DetailTitle>Phone:</DetailTitle>
            <DetailContent>{brewery.phone}</DetailContent>
          </Detail>
          <Detail>
            <DetailTitle>URL:</DetailTitle>
            <DetailContent>{brewery.website_url}</DetailContent>
          </Detail>
        </Details>
      </Content>
    </Modal>
  );
};

const Header = styled.div``;

const Divider = styled.hr``;

const Content = styled.div``;

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailTitle = styled.span`
  margin-right: 6px;
`;

const DetailContent = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
`;

const Detail = styled.li``;
