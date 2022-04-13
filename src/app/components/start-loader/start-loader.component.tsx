import React from 'react';
import tw, { styled } from 'twin.macro';
import Transition from 'react-transition-group/Transition';

const duration = 500;

interface StartLoaderProps {
  show: boolean;
}

export function StartLoaderComponent({ show }: StartLoaderProps) {
  return (
    <Transition in={show} timeout={duration}>
      {(state) => (
        <Wrapper data-testid="StartLoader" className={`fade-${state}`}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Wrapper>
      )}
    </Transition>
  );
}

const Wrapper = styled.div`
  ${tw`w-full h-full flex items-center justify-center absolute z-10 opacity-0 bg-white`};
  transition: opacity ${duration}ms ease-in-out;

  &.fade {
    &-entering {
      opacity: 1;
    }

    &-entered {
      opacity: 1;
    }

    &-exiting {
      opacity: 0;
    }

    &-exited {
      opacity: 0;
      display: none;
    }
  }

  ul {
    width: 108px;
    height: 108px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }

  ul li {
    width: 30px;
    height: 30px;
    margin: 2px;
    background-color: transparent;
    animation: loading 0.8s infinite;
  }

  ul li:nth-child(5) {
    opacity: 0;
  }
  ul li:nth-child(1) {
    animation-delay: 0.1s;
  }
  ul li:nth-child(2) {
    animation-delay: 0.2s;
  }
  ul li:nth-child(3) {
    animation-delay: 0.3s;
  }
  ul li:nth-child(6) {
    animation-delay: 0.4s;
  }
  ul li:nth-child(9) {
    animation-delay: 0.5s;
  }
  ul li:nth-child(8) {
    animation-delay: 0.6s;
  }
  ul li:nth-child(7) {
    animation-delay: 0.7s;
  }
  ul li:nth-child(4) {
    animation-delay: 0.8s;
  }
  @keyframes loading {
    1% {
      background-color: #0086b3;
    }
  }
`;
