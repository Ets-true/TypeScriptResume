import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { AppBar } from '../app-bar';

interface LayoutProps {}

export function LayoutComponent(props: LayoutProps) {
  return (
    <React.StrictMode>
      <Wrapper data-testid="Layout">
        <AppBar />
        <Outlet />
      </Wrapper>
    </React.StrictMode>
  );
}

const Wrapper = styled(Container)`
  ${tw`h-full flex flex-col`}
`;
