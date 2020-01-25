import React from 'react';
import Main from './main';
import Skills from './projects';
// import me from '../images/stars.jpg'
import github from './images/logos/github.svg'
import linkedin from './images/logos/linkedin.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='fixedTop'>
          <div className='inline'>
            <h1>Kainy Ryu</h1>
            <h2>Full Stack JavaScript(React) Engineer</h2>
          </div>
          <div className='inline links'>
            <a href='https://www.linkedin.com/in/kainyryu/' target='_blank' rel='noopener noreferrer'>
              <img className='link' src={linkedin} alt='linkedin' />
            </a>
            <a href='https://github.com/KainyRyu' target='_blank' rel='noopener noreferrer'>
              <img className='links' src={github} alt='github' />
            </a>
          </div>
        </div>
        <div className='card me'>
          {/* <div className='me' src={me} alt='profile'> */}


        </div>
        <Skills />
        <div className='card detail'>
          <div>
          </div>
        </div>
        <Main />
      </header>
    </div>
  );
}

export default App;

