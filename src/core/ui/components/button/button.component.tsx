import React from 'react';
import { styled } from 'twin.macro';
import { colors } from '../../styles';
import '../../styles/reset.css';

import { ReactComponent as LoadingIcon } from '../../assets/icons/loader.icon.svg';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;

  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  text?: boolean;

  disabled?: boolean;
  loading?: boolean;

  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}

export function ButtonComponent(props: ButtonProps) {
  return (
    <Wrapper data-testid="Button">
      {props.primary && !props.loading && (
        <PrimaryButton {...props}>
          {props.iconLeft && <IconLeft>{props.iconLeft}</IconLeft>}
          {props.children}
          {props.iconRight && <IconRight>{props.iconRight}</IconRight>}
        </PrimaryButton>
      )}
      {props.primary && props.loading && (
        <PrimaryButton {...props}>
          <LoadingIcon />
        </PrimaryButton>
      )}

      {props.secondary && !props.loading && (
        <SecondaryButton {...props}>
          {props.iconLeft && <IconLeft>{props.iconLeft}</IconLeft>}
          {props.children}
          {props.iconRight && <IconRight>{props.iconRight}</IconRight>}
        </SecondaryButton>
      )}
      {props.secondary && props.loading && (
        <SecondaryButton {...props}>
          <LoadingIcon />
        </SecondaryButton>
      )}

      {props.outline && !props.loading && (
        <OutlineButton {...props}>
          {props.iconLeft && <IconLeft>{props.iconLeft}</IconLeft>}
          {props.children}
          {props.iconRight && <IconRight>{props.iconRight}</IconRight>}
        </OutlineButton>
      )}
      {props.outline && props.loading && (
        <OutlineButton {...props}>
          <LoadingIcon />
        </OutlineButton>
      )}

      {props.text && !props.loading && (
        <TextButton {...props}>
          {props.iconLeft && <IconLeft>{props.iconLeft}</IconLeft>}
          {props.children}
          {props.iconRight && <IconRight>{props.iconRight}</IconRight>}
        </TextButton>
      )}
      {props.text && props.loading && (
        <TextButton {...props}>
          <LoadingIcon />
        </TextButton>
      )}
    </Wrapper>
  );
}

interface IIcon {
  iconleft: JSX.Element;
  iconRight: JSX.Element;
}

const Wrapper = styled.div`
  width: auto;
`;

const CustomButton = styled.button<ButtonProps>`
  transition: all 0.3s;
  display: block;
  width: auto;
  height: auto;

  padding-left: 16px;
  padding-right: 16px;

  padding-top: 10px;
  padding-bottom: 10px;

  border-radius: 8px;
  font-size: 14px;
  display: flex;
`;

const PrimaryButton = styled(CustomButton)`
  background-color: ${(props) =>
    props.disabled ? colors('primaryTetriary') : colors('primaryPrimary')};
  color: ${colors('textOnPrimaryColor')};
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? colors('primaryTetriary')
        : props.loading
        ? colors('primaryPrimary')
        : colors('primaryHoverState')};
  }
  &:active {
    background-color: ${(props) =>
      props.disabled
        ? colors('primaryTetriary')
        : props.loading
        ? colors('primaryPrimary')
        : colors('primaryClickState')};
  }
`;

const SecondaryButton = styled(CustomButton)`
  background-color: ${(props) =>
    props.disabled ? colors('primaryQuaternary') : colors('primaryQuaternary')};
  color: ${(props) =>
    props.disabled ? colors('textDisabled') : colors('primaryPrimary')};
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? colors('primaryQuaternary')
        : props.loading
        ? colors('primaryQuaternary')
        : colors('primaryHoverState')};
    color: ${(props) =>
      props.disabled
        ? colors('textDisabled')
        : props.loading
        ? colors('primaryPrimary')
        : colors('textOnPrimaryColor')};
  }
  &:active {
    background-color: ${(props) =>
      props.disabled
        ? colors('primaryQuaternary')
        : props.loading
        ? colors('primaryQuaternary')
        : colors('primaryClickState')};
    color: ${(props) =>
      props.disabled
        ? colors('textDisabled')
        : props.loading
        ? colors('primaryPrimary')
        : colors('textOnPrimaryColor')};
  }
`;

const OutlineButton = styled(CustomButton)`
  background-color: ${colors('textOnPrimaryColor')};
  outline: 1px solid ${colors('stroke')};
  color: ${(props) =>
    props.disabled ? colors('textDisabled') : colors('textPrimary')};
  &:hover {
    color: ${(props) =>
      props.disabled
        ? colors('textDisabled')
        : props.loading
        ? colors('textPrimary')
        : colors('primaryHoverState')};
  }
  &:active {
    color: ${(props) =>
      props.disabled
        ? colors('textDisabled')
        : props.loading
        ? colors('textPrimary')
        : colors('primaryClickState')};
  }
`;

const TextButton = styled(CustomButton)`
  background-color: none;
  color: ${(props) =>
    props.disabled ? colors('textDisabled') : colors('textPrimary')};
  &:hover {
    color: ${(props) =>
      props.disabled
        ? colors('textDisabled')
        : props.loading
        ? colors('textPrimary')
        : colors('primaryHoverState')};
  }
  &:active {
    color: ${(props) =>
      props.disabled
        ? colors('textDisabled')
        : props.loading
        ? colors('textPrimary')
        : colors('primaryClickState')};
  }
`;

const IconLeft = styled.div<IIcon>`
  width: 13px;
  height: 13px;
  margin-right: 12px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const IconRight = styled.div<IIcon>`
  width: 12px;
  height: 12px;
  margin-left: 12px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
