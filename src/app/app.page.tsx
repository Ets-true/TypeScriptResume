import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import tw, { styled } from 'twin.macro';

import { actions } from './app.slice';
import { fetchUsers } from 'core/features/examples/examples.slice';
import { selectTitle } from './app.selectors';
import { useAppSelector } from 'core/state/hooks';

function App() {
  const title = useAppSelector(selectTitle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTitle = () => dispatch(actions.updateTitle('Hello title'));

  return (
    <Wrapper>
      Бурочки. Title: {title}
      <div>
        <button onClick={updateTitle}>Update title</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${tw`border border-red-200 border-solid p-10`}
`;

export default App;
