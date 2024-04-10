import styled from "styled-components";
import { Modal, ModalProps } from "..";
import { Button } from "../button";

type ConfirmModalProps = {
  title: string;
  onConfirm: () => void;
} & Omit<ModalProps, "children">;

export const ConfirmModal = ({
  title,
  onClose,
  isOpen,
  onConfirm,
}: ConfirmModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>{title}</Title>
      <ActionsContainer>
        <Button onClick={handleConfirm}>Confirm</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ActionsContainer>
    </Modal>
  );
};

const Title = styled.div`
  margin-bottom: 8px;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;
