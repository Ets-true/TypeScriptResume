import React from 'react';
import tw, { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';

import { colors } from 'core/ui/styles';
import { HomeRoute } from 'app/home';

import logoImage from './assets/logo.png';
import { IoMdExit } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';

import { useAuth } from 'core/providers/auth.provider';
import { getProfileRoute } from 'core/features/users/users.helpers';
import env, { EnvNamesEnum } from 'core/services/env.service';

interface AppBarProps {}

export function AppBarComponent(props: AppBarProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const goToProfile = () => {
    if (user) {
      navigate(getProfileRoute(user.login));
    }
  };

  return (
    <Wrapper data-testid="AppBar">
      <LogoImage src={logoImage} alt="Логотип" />
      <LogoText onClick={() => navigate(HomeRoute.route)}>
        {env.get(EnvNamesEnum.companyName)}
      </LogoText>
      <ActionsWrapper>
        {user && (
          <Button onClick={goToProfile}>
            <CgProfile />
          </Button>
        )}

        {user && (
          <Button onClick={signOut}>
            <IoMdExit />
          </Button>
        )}
      </ActionsWrapper>
    </Wrapper>
  );
}

const Button = styled.div`
  ${tw`cursor-pointer ml-3`};

  color: ${colors('primary')};
  font-size: 18px;
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
