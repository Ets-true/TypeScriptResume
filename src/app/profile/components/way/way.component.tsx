import React from 'react';
import tw, { styled } from 'twin.macro';

interface WayProps {}

export function WayComponent(props: WayProps) {
  return <Wrapper data-testid="Way">Way component</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
