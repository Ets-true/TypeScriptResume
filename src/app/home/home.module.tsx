// import { MobxCounter } from 'core/features/examples/mobx-counter';
import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button } from './../../core/ui/components/button/index';
import { ReactComponent as Icon } from 'core/ui/assets/icons/users.icon.svg';

interface HomeProps {}

function onclickHandler() {
  alert('ok');
}

export function HomeModule(props: HomeProps) {
  return (
    <Wrapper data-testid="Home">
      <Button secondary iconRight={<Icon />} onClick={onclickHandler}>
        BUTTON CLICK ON ME
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${tw``};
`;
