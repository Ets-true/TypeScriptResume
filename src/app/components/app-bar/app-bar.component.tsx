import React from 'react';
import tw, { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';

import { HomePage } from 'app/home/home.page';

import logoImage from './assets/logo.png';
import { CgProfile } from 'react-icons/cg';

import { selectUser } from 'app/app.selectors';
import { useAppSelector } from 'core/state/hooks';
import { getProfileRoute } from 'core/features/users/users.helpers';
import { colors } from 'core/ui/styles';

interface AppBarProps {}

export function AppBarComponent(props: AppBarProps) {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const goToProfile = () => {
    if (user) {
      navigate(getProfileRoute(user.login));
    }
  };

  return (
    <Wrapper data-testid="AppBar">
      <LogoImage src={logoImage} alt="Логотип" />
      <LogoText onClick={() => navigate(HomePage.route)}>Бурочки</LogoText>
      <ActionsWrapper>
        <Button onClick={goToProfile}>
          <CgProfile />
        </Button>
      </ActionsWrapper>
    </Wrapper>
  );
}

const Button = styled.div`
  ${tw`cursor-pointer`};

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
