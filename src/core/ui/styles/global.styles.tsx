import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { colors } from './colors';

import 'react-toastify/dist/ReactToastify.css';

const CustomStyles = createGlobalStyle`
  body, html, #root {
    font-family: 'Roboto';
    color: ${colors('text')};
    ${tw`h-full w-full`}
  }
`;

export function GlobalStylesComponent() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}
