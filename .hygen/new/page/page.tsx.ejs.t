---
to: <%= path %>/<%= page_file_name %>.tsx
---
import React from 'react';
import tw, { styled } from 'twin.macro';

interface <%= page_name %>Props {

}

export function <%= page_name %>Page(props: <%= page_name %>Props) {
  return(
    <Wrapper data-testid="<%= page_name %>">
      <%= page_name %>
    </Wrapper>
  );
}

<%= page_name %>Page.route = '<%= kebab_name %>';

const Wrapper = styled.div`
  ${tw``};
`;
