import React from 'react';
import tw, { styled } from 'twin.macro';

function App() {
  return (
    <Wrapper>
      <Content>Content</Content>
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
