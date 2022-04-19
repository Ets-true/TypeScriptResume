import React from 'react';
import tw, { styled } from 'twin.macro';

interface HomeProps {}

export function HomePage(props: HomeProps) {
  return <Wrapper data-testid="Home">Home</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
