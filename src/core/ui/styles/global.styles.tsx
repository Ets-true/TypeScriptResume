import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';
import { colors } from './colors';

import 'index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const CustomStyles = createGlobalStyle`
  body, html, #root {
    ${tw`h-full w-full`};

    color: ${colors('text')};
    font-family: 'Roboto';
  }
`;

export function GlobalStylesComponent() {
  return (
    <>
      <CustomStyles />
    </>
  );
}
