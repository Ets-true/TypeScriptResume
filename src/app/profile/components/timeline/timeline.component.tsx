import React from 'react';
import tw, { styled } from 'twin.macro';

interface TimelineProps {}

export function TimelineComponent(props: TimelineProps) {
  return <Wrapper data-testid="Timeline">Timeline component</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
