import React from 'react';

import tw, { styled } from 'twin.macro';
import { Route, Routes } from 'react-router-dom';

import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

export default function UnauthApp() {
  return (
    <React.StrictMode>
      <Wrapper data-testid="AppPage">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Wrapper>
    </React.StrictMode>
  );
}

const Wrapper = styled.div`
  ${tw`container h-full mx-auto bg-white`};
`;
