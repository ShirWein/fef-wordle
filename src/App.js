import './App.css';
import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState(<Welcome/>)

  return (
    <>
      <h1>Wordle!</h1>
      <Welcome/>
      <Game/>
    </> 
  );
}

export default App;
