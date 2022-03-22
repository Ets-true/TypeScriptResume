import React from 'react';
import { useToken } from 'core/hooks/use-token';
import tw, { styled } from 'twin.macro';

function App() {
  const token = useToken();

  if (!token) {
    return (
      <Wrapper>
        <Content>Non auth application</Content>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Content>Authenticated application</Content>
    </Wrapper>
  );
}

const Content = styled.main`
  ${tw`border-red-200 border border-solid`}
`;

const Wrapper = styled.div`
  ${tw`container mx-auto border border-green-200 border-solid`}
`;

export default App;
