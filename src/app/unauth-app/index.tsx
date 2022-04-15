import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SignIn } from './sign-in';
import { SignUp } from './sign-up';
import { Container } from 'react-bootstrap';
import tw, { styled } from 'twin.macro';

export default function UnauthApp() {
  return (
    <React.StrictMode>
      <Wrapper data-testid="AppPage">
        <Routes>
          <Route path={SignIn.route} element={<SignIn />} />
          <Route path={SignUp.route} element={<SignUp />} />
          <Route path={'*'} element={<Navigate to={SignIn.route} />} />
        </Routes>
      </Wrapper>
    </React.StrictMode>
  );
}

const Wrapper = styled(Container)`
  ${tw`h-full flex flex-col`}
`;
