import React from 'react';
import tw, { styled } from 'twin.macro';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoImage } from 'core/ui/assets/logo.svg';
import { ReactComponent as UsersImage } from 'core/ui/assets/icons/users.icon.svg';
import { ReactComponent as IconEvents } from 'core/ui/assets/icons/events.icon.svg';
import { ReactComponent as IconMarker } from 'core/ui/assets/icons/geoposition-marker.icon.svg';
import { ReactComponent as IconDevices } from 'core/ui/assets/icons/device.icon.svg';
import { ReactComponent as IconTimeline } from 'core/ui/assets/icons/timeline.icon.svg';
import { ReactComponent as IconDashboard } from 'core/ui/assets/icons/dashboard.icon.svg';
import { ReactComponent as IconSignalCellular } from 'core/ui/assets/icons/signal-cellular.icon.svg';
import { ReactComponent as DooubleArrowsImage } from 'core/ui/assets/icons/double-arrows.icon.svg';

import { actions } from 'app/app.slice';
import { selectShowSidebar } from 'app/app.selectors';
import { colors } from 'core/ui/styles';

export const SIDEBAR_WIDTH = 250;
export const TOGGLED_SIDEBAR_WIDTH = 70;

const menuItems = [
  { title: 'Дашборд', href: '/', icon: <IconDashboard /> },
  { title: 'Карта', href: '/map', icon: <IconMarker /> },
  { title: 'Устройства', href: '/devices', icon: <IconDevices /> },
  { title: 'Статистика', href: '/timeline', icon: <IconTimeline /> },
  { title: 'События', href: '/events', icon: <IconEvents /> },
  { title: 'Системные KPI', href: '/cellular', icon: <IconSignalCellular /> },
  { title: 'Пользователи', href: '/users', icon: <UsersImage /> },
];

interface PureSsidebarProps {
  showSidebar: boolean;
}
export function PureSidebarComponent({ showSidebar }: PureSsidebarProps) {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(actions.toggleSidebar());
  };

  return (
    <Wrapper data-testid="Sidebar" toggled={!showSidebar}>
      <LogoWrapper>
        <LogoImage />
      </LogoWrapper>

      <SidebarNav>
        {menuItems.map((item, index) => (
          <SidebarNavItem key={`sidebar-item-${index}`}>
            <StyledLink to={item.href} key={uuidv4()}>
              <WrapperIcon>{item.icon}</WrapperIcon>
              <StyledLinkText>{item.title}</StyledLinkText>
            </StyledLink>
          </SidebarNavItem>
        ))}
      </SidebarNav>

      <BottomToggler onClick={toggleMenu}>
        <BottomArrowsWrapper toggled={!showSidebar}>
          <DooubleArrowsImage />
        </BottomArrowsWrapper>
        <ButtonToggleText>Свернуть меню</ButtonToggleText>
      </BottomToggler>
    </Wrapper>
  );
}

interface SidebarProps {}
export function SidebarComponent(props: SidebarProps) {
  const showSidebar = useSelector(selectShowSidebar);

  return <PureSidebarComponent showSidebar={showSidebar} />;
}

interface BottomArrowsWrapperProps {
  toggled: boolean;
}
const BottomArrowsWrapper = styled.div<BottomArrowsWrapperProps>`
  transform: rotate(${(p) => (p.toggled ? 180 : 0)}deg);
  transition: all 0.5s ease-in-out;
`;

const BottomToggler = styled.div`
  ${tw`flex absolute items-center cursor-pointer`};

  left: 0;
  padding-left: 30px;
  width: ${SIDEBAR_WIDTH}px;
  bottom: 17px;
  white-space: nowrap;
`;

const ButtonToggleText = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  margin-left: 30px;
  color: ${colors('textTetriary')};
`;

const LogoWrapper = styled.div`
  ${tw`p-2 flex absolute left-0`};
  top: 14px;
`;

interface WrapperProps {
  toggled: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  ${tw`fixed h-full overflow-y-auto overflow-x-hidden transition-all duration-500 ease-in-out`};

  left: 0;
  width: ${(p) => (p.toggled ? TOGGLED_SIDEBAR_WIDTH : SIDEBAR_WIDTH)}px;

  z-index: 1000;
  background: ${colors('bgSecondary')};
`;

const SidebarNav = styled.ul`
  ${tw`absolute top-36 m-0 p-0 list-none`};

  width: 90%;
  background: ${colors('bgSecondary')};
`;

const SidebarNavItem = styled.li`
  ${tw``};

  text-indent: 15px;
`;
const StyledLink = styled(NavLink)`
  ${tw`w-full px-3 py-5 flex items-center`};

  border-radius: 0px 8px 8px 0px;
  color: ${colors('textTetriary')};
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  &.active {
    background: ${colors('primaryPrimary')};
    position: relative;
    color: ${colors('textOnPrimaryColor')};
    transition: background 0.5s;
  }

  &.active svg > path {
    fill: ${colors('textOnPrimaryColor')};
  }
`;

const StyledLinkText = styled.span`
  ${tw`overflow-hidden`};

  white-space: nowrap;
`;

const WrapperIcon = styled.div`
  ${tw`mr-3 ml-3`};

  width: 16px;
  height: 16px;
`;
