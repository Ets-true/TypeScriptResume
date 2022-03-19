import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

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
    <div className="App">
      Lis V2AP application. Title: {title}
      <div>
        <button onClick={updateTitle}>Update title</button>
      </div>
    </div>
  );
}

export default App;
