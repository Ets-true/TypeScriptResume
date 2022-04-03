import React, { useEffect } from 'react';

import tw, { styled } from 'twin.macro';
import { Routes, Route } from 'react-router-dom';

import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

import { RainbowBorder } from 'core/ui/styles/mixins/rainbow';

import { selectUser } from './app.selectors';
import { startAppActoin } from './app.slice';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';

const AuthApp = () => (
  <React.StrictMode>
    <Wrapper data-testid="AppPage">content</Wrapper>
  </React.StrictMode>
);

const NonAuthApp = () => (
  <React.StrictMode>
    <Wrapper data-testid="AppPage">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Wrapper>
  </React.StrictMode>
);

function App() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startAppActoin());
  }, []);

  return (user && <AuthApp />) || <NonAuthApp />;
}

const Wrapper = styled.div`
  ${RainbowBorder};
  ${tw`container h-full mx-auto bg-white`};
`;

export default App;
