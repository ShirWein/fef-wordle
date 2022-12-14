import './index.css';
import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';
import { useState } from 'react';
import * as React from 'react';


function App() {

  const [page, setPage] = useState(<Welcome/>)

  return (
    <>
      <Welcome/>
      <Game/>
    </> 
  );
}

export default App;
