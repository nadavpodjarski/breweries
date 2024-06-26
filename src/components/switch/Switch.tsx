import { ChangeEventHandler } from "react";
import styled from "styled-components";

type SwitchProps = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <CheckboxInput checked={checked} onChange={onChange} />
      <Slider />
    </Container>
  );
};

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(12px); /* Adjusted translation */
  }
`;
