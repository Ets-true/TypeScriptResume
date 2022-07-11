import { colors } from 'core/ui/styles';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

interface DateTimeProps {}

export function DateTimeComponent(props: DateTimeProps) {
  const [curretnTime, setCurretnTime] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurretnTime(new Date());
  };

  return (
    <Wrapper data-testid="date-time">
      <WrapperTime>
        {curretnTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </WrapperTime>
      <DateWrapper>
        <WrapperDate>{curretnTime.toLocaleDateString('ru')}</WrapperDate>
      </DateWrapper>
    </Wrapper>
  );
}

const DateWrapper = styled.div`
  margin-right: 24px;
`;

const Wrapper = styled.div`
  ${tw`w-full flex items-center justify-end`};

  color: #000000;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-right: solid 1px ${colors('textTetriary')};
`;
const WrapperTime = styled.div`
  ${tw`px-3 mr-3 leading-none`};
`;

const WrapperDate = styled.div``;
