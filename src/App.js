import { useEffect, useReducer } from 'react';

import {
  QUANDL_API_BASE,
  QUANDL_CODE_HARD_LOGS,
  QUANDL_CODE_HARD_SAWNWOOD,
  QUANDL_CODE_LUMBER_FUTURES,
  QUANDL_CODE_SOFT_LOGS,
  QUANDL_CODE_SOFT_SAWNWOOD,
} from './constants';

import './App.scss';


/**
 * TODO: document
 */
const initialState = {};

function init(initialState) {
  const storageState = JSON.parse(localStorage.getItem('state'));
  const initState = storageState || initialState;
  return {...initState};
}

function reducer(state, action) {
  switch (action.type) {
    case 'foo':
      return {...state};
    default:
      throw new Error();
  }
}


function App() {
  // Runs once (app start/mount)
  useEffect(() => {
    fetch(QUANDL_API_BASE + QUANDL_CODE_HARD_LOGS, {
      mode: 'cors',
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
