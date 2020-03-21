import React from 'react';
import './timesThem.css';
import Profile from './profile'
import Header from './Header';
import Activities from './activities/Activities';
import Project from './project/Projects';

function App() {
  return (
    <div className="App">
      <div className='timesbg'>
            <Header />
            <div className='timesBody'>
                <Profile />
                <div className="body-right">
                    <h1 className='skills' >
                        “Skills :  JavaScript, ReactJS, NodeJS, mongoDB, Express, HTML5, CSS3, Bootstrap3 and more are coming..” 
                    </h1>
                    <Activities />
                </div>
            </div>
            <div className="project-label-container">
                <h1 className='project-label'>PROJECTS;</h1> 
                <span className='project-label-span'>click the 
                    <span className="underline"> images</span> or the 
                    <span className="underline"> underlined text</span> to see my work.
                </span>
            </div>
            <Project />
        </div>
    </div>
  );
}

export default App;
