import { MobxCounter } from 'core/features/examples/mobx-counter';
import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button } from './../../core/ui/components/button/index';

interface HomeProps {}

function onclickHandler() {
  alert('ok');
}

export function HomeModule(props: HomeProps) {
  return (
    <Wrapper data-testid="Home">
      <Button theme="dark" onClick={onclickHandler}>
        Click on
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${tw``};
`;
