import React from 'react';
import tw, { styled, css } from 'twin.macro';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  theme?: string;
}

interface IProps {
  theme?: string;
}

const Wrapper = styled.div`
  width: auto;
`;

const CustomButton = styled.button<IProps>`
  ${(props: ButtonProps) => {
    switch (props.theme) {
      case 'dark':
        return css`
          background-color: black;
          color: white;
        `;
      case 'red':
        return css`
          background-color: red;
          color: white;
        `;
      default:
        return css`
          background-color: white;
          color: black;
        `;
    }
  }}
`;

export function ButtonComponent(props: ButtonProps) {
  return (
    <Wrapper data-testid="Button">
      <CustomButton {...props}>{props.children}</CustomButton>
    </Wrapper>
  );
}
