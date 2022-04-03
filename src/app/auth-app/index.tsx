import React from 'react';

import tw, { styled } from 'twin.macro';

export default function AuthApp() {
  return (
    <React.StrictMode>
      <Wrapper data-testid="AppPage">content</Wrapper>
    </React.StrictMode>
  );
}

const Wrapper = styled.div`
  ${tw`container h-full mx-auto bg-white`};
`;
