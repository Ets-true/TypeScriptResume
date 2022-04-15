import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import tw, { styled } from 'twin.macro';
import { AppBar } from './components/app-bar';
import { HomePage } from './home/home.page';

export default function AuthApp() {
  return (
    <React.StrictMode>
      <Wrapper data-testid="AppPage">
        <AppBar />

        <Routes>
          <Route path={HomePage.route} element={<HomePage />} />
          <Route path={'*'} element={<Navigate to={HomePage.route} />} />
        </Routes>
      </Wrapper>
    </React.StrictMode>
  );
}

const Wrapper = styled.div`
  ${tw`container h-full mx-auto bg-white`};
`;
