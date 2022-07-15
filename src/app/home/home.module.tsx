import React from 'react';
import { useTranslation } from 'react-i18next';
import tw, { styled } from 'twin.macro';
import { Button } from './../../core/ui/components/button/index';
import { ReactComponent as Icon } from 'core/ui/assets/icons/users.icon.svg';

interface HomeProps {}

function onclickHandler() {
  alert('ok');
}

export function HomeModule(props: HomeProps) {
  const { t } = useTranslation();

  return <Wrapper data-testid="Home">{t('home')}</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
