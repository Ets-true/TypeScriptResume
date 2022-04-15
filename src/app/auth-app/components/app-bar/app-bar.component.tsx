import React from 'react';
import tw, { styled } from 'twin.macro';

import logoImage from './assets/logo.png';

interface AppBarProps {}

export function AppBarComponent(props: AppBarProps) {
  return (
    <Wrapper data-testid="AppBar">
      <LogoImage src={logoImage} alt="Логотип" />
      <LogoText>Бурочки</LogoText>
    </Wrapper>
  );
}

const LogoText = styled.div`
  ${tw`ml-3`};
  font-size: 18px;
  text-transform: uppercase;
`;

const LogoImage = styled.img`
  height: 24px;
`;

const Wrapper = styled.div`
  ${tw`flex items-center`};

  height: 40px;
  border-bottom: 1px solid #e7e8ec;
`;
