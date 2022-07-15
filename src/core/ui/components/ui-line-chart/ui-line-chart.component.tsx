import React from 'react';
import tw, { styled } from 'twin.macro';

interface UiLineChartProps {}

export function UiLineChartComponent(props: UiLineChartProps) {
  return <Wrapper data-testid="UiLineChart">UiLineChart component</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
