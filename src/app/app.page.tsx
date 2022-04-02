import React, { useEffect } from 'react';

import tw, { styled } from 'twin.macro';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';

import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

import { selectUser } from './app.selectors';
import { startAppActoin } from './app.slice';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';

const AuthApp = () => (
  <Wrapper data-testid="AppPage">
    <Content>application</Content>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Wrapper>
);

const NonAuthApp = () => (
  <Wrapper data-testid="AppPage">
    <Content>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Content>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Wrapper>
);

function App() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startAppActoin());
  }, []);

  return (user && <AuthApp />) || <NonAuthApp />;
}

const Content = styled.main`
  ${tw`border-red-200 border border-solid`}
`;

const Wrapper = styled.div`
  ${tw`container mx-auto border border-green-200 border-solid`}
`;

export default App;
