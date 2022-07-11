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
import { ReactComponent as IconDashboard } from 'core/ui/assets/icons/dashboard.icon.svg';
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
  { title: 'События', href: '/events', icon: <IconEvents /> },
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
        <LogoText>V2AP</LogoText>
      </LogoWrapper>

      <SidebarNav>
        {menuItems.map((item, index) => (
          <SidebarNavItem key={`sidebar-item-${index}`}>
            <StyledLink to={item.href} key={uuidv4()}>
              <WrapperIcon>{item.icon}</WrapperIcon>
              <span>{item.title}</span>
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
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  margin-left: 30px;
`;

const LogoText = styled.div`
  ${tw`flex items-center ml-2`};

  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
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

  /* left: ${(p) => (p.toggled ? -250 : TOGGLED_SIDEBAR_WIDTH)}px; */
  left: 0;
  width: ${(p) => (p.toggled ? TOGGLED_SIDEBAR_WIDTH : SIDEBAR_WIDTH)}px;

  z-index: 1000;
  background: #fff;
`;

const SidebarNav = styled.ul`
  ${tw`absolute top-20 m-0 p-0 list-none`};

  width: ${SIDEBAR_WIDTH}px;
  background: #fff;
`;

const SidebarNavItem = styled.li`
  ${tw``};

  text-indent: 20px;
`;
const StyledLink = styled(NavLink)`
  /* height: 40px; */

  border-radius: 2px;
  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  &.active {
    background: ${colors('bgPrimary')};
    position: relative;
    color: ${colors('textPrimary')};
    transition: background 0.5s;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      background: ${colors('textPrimary')};
      width: 6px;
      ${tw`py-8`};
    }
  }
  ${tw`w-full px-3 py-5 flex items-center`};
`;
const WrapperIcon = styled.div`
  ${tw`mr-3 ml-3`};
`;
