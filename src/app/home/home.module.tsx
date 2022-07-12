import { MobxCounter } from 'core/features/examples/mobx-counter';
import React from 'react';
import tw, { styled } from 'twin.macro';

interface HomeProps {}

export function HomeModule(props: HomeProps) {
  return (
    <Wrapper data-testid="Home">
      Home
      <MobxCounter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${tw``};
`;
