import React from 'react';
import tw, { styled } from 'twin.macro';

interface ProfileProps {}

export function ProfileModule(props: ProfileProps) {
  return <Wrapper data-testid="Profile">Profile</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
