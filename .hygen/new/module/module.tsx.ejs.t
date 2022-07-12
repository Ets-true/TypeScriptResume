---
to: <%= path %>/<%= moduleFileName %>.tsx
---
import React from 'react';
import tw, { styled } from 'twin.macro';

interface <%= moduleName %>Props {

}

export function <%= moduleName %>Module(props: <%= moduleName %>Props) {
  return(
    <Wrapper data-testid="<%= moduleName %>">
      <%= moduleName %>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${tw``};
`;
