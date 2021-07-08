import React, { useReducer } from 'react';
// import './App.scss';
import List from './components/List';
import Form from './components/Form';
import { reducer, initialState } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Form dispatch={dispatch} state={state}/>
      <List dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
