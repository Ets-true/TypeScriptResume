import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { colors } from '../../styles';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  theme?: string;
  // type?: string;
  disabled?: boolean;
}

// export type ButtonDisabledState = 'disabled' | null;

// interface IProps {
//   onClick?: () => void;
//   theme?: string;
// }

export function ButtonComponent(props: ButtonProps) {
  return (
    <Wrapper data-testid="Button">
      <CustomButton {...props}>{props.children}</CustomButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: auto;
`;

const CustomButton = styled.button<ButtonProps>`
  border: 2px solid ${colors('primaryPrimary')};
  width: 89px;
  height: 40px;
  border-radius: 8px;
  background-color: ${colors('primaryPrimary')};
  color: white;
  /* border-color: $(colors('error')); */
  /* ${(props) => {
    switch (props.theme) {
      case 'dark':
        return `
          background-color: black;
          color: white;
        `;
      case 'red':
        return `
          background-color: red;
          color: white;
        `;
      default:
        return `
          background-color: purple;
          color: black;
        `;
    }
  }} */
`;
