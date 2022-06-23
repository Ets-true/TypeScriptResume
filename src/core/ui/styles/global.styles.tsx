import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

import { colors } from './colors';

import 'index.css';
import 'react-toastify/dist/ReactToastify.css';

const CustomStyles = createGlobalStyle`
  body, html, #root {
    ${tw`h-full w-full`};

    color: ${colors('mainText')};
    font-family: 'Roboto';
  }

  input {
    border: 1px solid #c6c6c6;
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
