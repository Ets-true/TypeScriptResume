import React from 'react';
import { useToken } from 'core/hooks/use-token';
import tw, { styled } from 'twin.macro';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

const AuthApp = () => (
  <Wrapper data-testid="AppPage">
    <Content>application</Content>
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
  </Wrapper>
);

function App() {
  const token = useToken();

  return (token && <AuthApp />) || <NonAuthApp />;
}

const Content = styled.main`
  ${tw`border-red-200 border border-solid`}
`;

const Wrapper = styled.div`
  ${tw`container mx-auto border border-green-200 border-solid`}
`;

export default App;
