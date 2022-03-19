---
to: <%= path %>/<%= component_file_name %>.tsx
---
import React from 'react'
import tw, { styled } from 'twin.macro'

interface <%= component_name %>Props {

}

export function <%= component_name %>Component(props: <%= component_name %>Props) {
  return(<Wrapper data-testid="<%= component_name %>">

  </Wrapper>)
}

const Wrapper = styled.div`
  ${tw``};
`