import React from 'react';
import tw, { styled } from 'twin.macro';

interface InfoProps {}

export function InfoComponent(props: InfoProps) {
  return <Wrapper data-testid="Info">Info component</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
