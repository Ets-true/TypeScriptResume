import React from 'react';
import tw, { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';

import { CgProfile } from 'react-icons/cg';
import { HomePage } from 'app/auth-app/home/home.page';

import logoImage from './assets/logo.png';

interface AppBarProps {}

export function AppBarComponent(props: AppBarProps) {
  const navigate = useNavigate();

  return (
    <Wrapper data-testid="AppBar">
      <LogoImage src={logoImage} alt="Логотип" />
      <LogoText onClick={() => navigate(HomePage.route)}>Бурочки</LogoText>
      <ActionsWrapper>
        <Button>
          <CgProfile />
        </Button>
      </ActionsWrapper>
    </Wrapper>
  );
}

const Button = styled.div`
  ${tw`cursor-pointer`};
`;

const ActionsWrapper = styled.div`
  ${tw`ml-auto flex`};
`;

const LogoText = styled.div`
  ${tw`ml-3 cursor-pointer`};
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
