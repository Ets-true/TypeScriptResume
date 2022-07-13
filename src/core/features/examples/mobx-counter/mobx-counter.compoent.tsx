import tw, { styled } from 'twin.macro';
import { observer } from 'mobx-react-lite';
import { useMobxStores } from 'core/hooks/use-mobx-stores.hook';

interface MobxCounterComponentProps {}

export const MobxCounterComponent = observer(
  (props: MobxCounterComponentProps) => {
    const { mobxCounter } = useMobxStores();

    return (
      <Wrapper>
        <Button onClick={() => mobxCounter.increment()}>+</Button>
        <Value>{mobxCounter.value}</Value>
        <Button onClick={() => mobxCounter.decrement()}>-</Button>
      </Wrapper>
    );
  }
);

const Value = styled.div``;

const Button = styled.div`
  ${tw`w-5 h-5 border-black border-solid border-2 flex items-center justify-center mr-3 cursor-pointer`}
`;

const Wrapper = styled.div`
  ${tw`flex`}
`;
