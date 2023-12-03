import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PrimaryDiv = styled(Button)`
  color: #49c670;
  background-color: var(--primary-color);
  border: 1px transparent solid;

  &:hover {
    background-color: var(--primary-color-hover);
  }

  &:disabled,
  &[disabled] {
    background-color: var(--primary-color-hover);
    cursor: auto;
  }
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NormalDiv = styled(Button)`
  color: black;
  background-color: transparent;
  border: 1px black solid;

  &:hover {
    background-color: #f1f1f1;
  }

  &:disabled,
  &[disabled] {
    background-color: #f1f1f1;
    cursor: auto;
  }
`;

const Span = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const PrimaryButton = (props) => {
  return (
    <PrimaryDiv {...props} disabled={props.$loading || props.disabled}>
      {props.$loading ? (
        <div></div>
      ) : (
        <DivBtn>
          <Span>{props.$text}</Span>
          <BsArrowRight size={22} />
        </DivBtn>
      )}
    </PrimaryDiv>
  );
};

export const SecondaryButton = (props) => {
  return (
    <NormalDiv {...props} disabled={props.$loading}>
      {props.$loading ? (
        <div></div>
      ) : (
        <DivBtn>
          <Span>{props.$text}</Span>
          <BsArrowRight size={22} />
        </DivBtn>
      )}
    </NormalDiv>
  );
};
