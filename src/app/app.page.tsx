import { useAppSelector } from 'core/state/hooks';
import React from 'react';
import { selectTitle } from './app.selectors';

function App() {
  const title = useAppSelector(selectTitle);

  return <div className="App">Lis V2AP application. Title: {title}</div>;
}

export default App;
