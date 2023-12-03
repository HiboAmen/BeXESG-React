import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const PrimaryInput = styled.input`
  padding: 10px;
  background-color: #e5e5e5;
  border: none;
  border-bottom: 1px gray solid;
  font-size: 17px;
`;

export const TextAreaInput = styled.textarea`
  padding: 10px;
  background-color: #e5e5e5;
  border: none;
  border-bottom: 1px gray solid;
  font-size: 16px;
`;

const SecondaryInputContainer = styled.div`
  padding: 5px;
  background-color: #e5e5e5;
  border: none;
  border-bottom: 1px gray solid;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SecondaryInputStyle = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export const Container = ({ children, labelName, ...restProps }) => {
  return (
    <InputContainer>
      <label {...restProps}> {labelName} </label>
      {children}
    </InputContainer>
  );
};

export const SecondaryInput = ({ children, ...restProps }) => {
  return (
    <SecondaryInputContainer>{children && children}</SecondaryInputContainer>
  );
};
