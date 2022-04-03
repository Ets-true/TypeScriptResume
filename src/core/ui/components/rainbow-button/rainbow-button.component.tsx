import React from 'react';
import tw, { styled } from 'twin.macro';

interface RainbowButtonProps {
  children: any;

  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
}

export function RainbowButtonComponent({
  type = 'button',
  onClick = (e) => {},
  children,
}: RainbowButtonProps) {
  return (
    <Wrapper onClick={onClick} type={type} data-testid="RainbowButton">
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  ${tw`relative cursor-pointer leading-10 px-8 text-white z-0 border-transparent`}

  &::before {
    ${tw`absolute`}

    content: '';
    top: -2px;
    left: -2px;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
    background: linear-gradient(
        45deg,
        rgb(255, 0, 0),
        rgb(255, 115, 0),
        rgb(255, 251, 0),
        rgb(72, 255, 0),
        rgb(0, 255, 213),
        rgb(0, 43, 255),
        rgb(122, 0, 255),
        rgb(255, 0, 200),
        rgb(255, 0, 0)
      )
      0% 0% / 400%;
    animation: 20s linear 0s infinite normal none running slidebg;
    transition: opacity 0.3s ease-in-out 0s;

    @keyframes slidebg {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  }

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(17, 17, 17);
    left: 0px;
    top: 0px;
  }
`;
