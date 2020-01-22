import React from 'react';
import Main from './main';
import Skills from './projects';
import me from './images/stars.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='card me'>
          <div className='me' src={me} alt='profile'>

          </div>
        </div>
        <Skills />
        <div className='card projects'>
          <div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
