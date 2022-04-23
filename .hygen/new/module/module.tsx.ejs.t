---
to: <%= path %>/<%= module_file_name %>.tsx
---
import React from 'react';
import tw, { styled } from 'twin.macro';

interface <%= module_name %>Props {

}

export function <%= module_name %>Module(props: <%= module_name %>Props) {
  return(
    <Wrapper data-testid="<%= module_name %>">
      <%= module_name %>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${tw``};
`;
