import React from 'react';
import PlayerList from './components/PlayerList';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <PlayerList />
      </div>
    </>
  );
}

export default App;