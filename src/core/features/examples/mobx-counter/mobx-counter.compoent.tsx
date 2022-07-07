import tw, { styled } from 'twin.macro';
import { observer } from 'mobx-react-lite';

interface MobxCounterComponentProps {}

export const MobxCounterComponent = observer(
  (props: MobxCounterComponentProps) => {
    return (
      <Wrapper>
        <Button>+</Button>
        <Value></Value>
        <Button>-</Button>
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
