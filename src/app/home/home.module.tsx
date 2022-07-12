import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button } from './../../core/ui/components/button/index';

interface HomeProps {}

export function HomeModule(props: HomeProps) {
  return (
    <Wrapper data-testid="Home">
      <Button theme="dark">Click on</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${tw``};
`;
