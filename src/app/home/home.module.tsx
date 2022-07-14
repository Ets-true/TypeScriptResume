import React from 'react';
import { useTranslation } from 'react-i18next';
import tw, { styled } from 'twin.macro';

interface HomeProps {}

export function HomeModule(props: HomeProps) {
  const { t } = useTranslation();

  return <Wrapper data-testid="Home">{t('home')}</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
