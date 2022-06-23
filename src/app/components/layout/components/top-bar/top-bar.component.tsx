import { selectTitle } from 'app/app.selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';
import { DateTimeComponent } from '../date-time/date-time.component';

interface PureTopBarProps {
  title: string;
}
export function PureTopBarComponent(props: PureTopBarProps) {
  return (
    <Wrapper data-testid="TopBar">
      <TitleWrapper>{props.title}</TitleWrapper>
      <DateTimeComponent />
    </Wrapper>
  );
}

interface TopBarProps {}
export function TopBarComponent(props: TopBarProps) {
  const title = useSelector(selectTitle);

  return <PureTopBarComponent title={title} />;
}

const TitleWrapper = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  ${tw`flex`};
  margin-bottom: 34px;
`;
