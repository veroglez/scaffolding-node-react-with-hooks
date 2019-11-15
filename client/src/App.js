import React, { useEffect } from 'react';
import { useStateValue } from 'common/context/contextHooks';
import fetch from 'common/fetch';

const onFetch = async ({ dispatch }) => {
  const endpoint = 'http://localhost:3000';
  const service = 'characters';
  const characters = await fetch({ endpoint, service }).catch(err => err);

  dispatch({
    type: 'update',
    payload: {
      characters,
    },
  });
};


const App = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => { onFetch({ dispatch }); });

  return (
    <div className="App">
      holi
    </div>
  );
};

export default App;
