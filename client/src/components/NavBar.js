import React from 'react'
import { useDarkMode } from '../utils/useDarkMode';

function NavBar() {
  const [darkMode, setDarkMode] = useDarkMode()

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Women's Soccer Players</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
    </nav>
  )
}

export default NavBar;