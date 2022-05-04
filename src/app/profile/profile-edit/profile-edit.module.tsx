import React from 'react';
import tw, { styled } from 'twin.macro';

interface ProfileEditProps {}

export function ProfileEditModule(props: ProfileEditProps) {
  return <Wrapper data-testid="ProfileEdit">ProfileEdit</Wrapper>;
}

const Wrapper = styled.div`
  ${tw``};
`;
