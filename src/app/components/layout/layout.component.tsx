import React from 'react';
import tw, { styled } from 'twin.macro';
import { Outlet } from 'react-router-dom';

import { colors } from 'core/ui/styles';
import { useAppSelector } from 'core/state/hooks';
import { selectShowSidebar } from 'app/app.selectors';

import { Sidebar } from './components/sidebar';
import { TopBarComponent } from './components/top-bar/top-bar.component';

import { TOGGLED_SIDEBAR_WIDTH } from './components/sidebar/sidebar.component';

interface LayoutProps {}

export function LayoutComponent(props: LayoutProps) {
  const showSidebar = useAppSelector(selectShowSidebar);

  return (
    <React.StrictMode>
      <Wrapper data-testid="Layout" toggled={!showSidebar}>
        <Sidebar />

        <Content toggled={!showSidebar}>
          <TopBarComponent />
          <Outlet />
        </Content>
      </Wrapper>
    </React.StrictMode>
  );
}

interface ContentProps {
  toggled: boolean;
}
const Content = styled.main<ContentProps>`
  ${tw`w-full h-full relative p-10`};

  margin-right: ${(p) =>
    p.toggled ? `${TOGGLED_SIDEBAR_WIDTH}px` : 'initial'};
`;

interface WrapperProps {
  toggled: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  ${tw`h-full`};
  padding-left: ${(p) => (p.toggled ? TOGGLED_SIDEBAR_WIDTH : 250)}px;

  transition: all 0.5s ease;
  background-color: ${colors('bgPrimary')};
`;
