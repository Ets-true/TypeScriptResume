import React from 'react';
import tw, { styled } from 'twin.macro';
import Transition from 'react-transition-group/Transition';

const duration = 300;

interface StartLoaderProps {
  show: boolean;
}

export function StartLoaderComponent({ show }: StartLoaderProps) {
  return (
    <Transition in={show} timeout={duration}>
      {(state) => (
        <HeartLoader data-testid="StartLoader" className={`fade-${state}`}>
          <div className="lds-heart">
            <div />
          </div>
        </HeartLoader>
      )}
    </Transition>
  );
}

const HeartLoader = styled.div`
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

  .lds-heart {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    transform-origin: 40px 40px;
  }
  .lds-heart div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #ec407a;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .lds-heart div:after,
  .lds-heart div:before {
    content: ' ';
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    background-color: #ec407a;
  }
  .lds-heart div:before {
    left: -24px;
    border-radius: 50% 0 0 50%;
  }
  .lds-heart div:after {
    top: -24px;
    border-radius: 50% 50% 0 0;
  }
  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;
