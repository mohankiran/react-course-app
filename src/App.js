import React from 'react';
import './App.css';
import Userinput from './Components/Userinput';
import Header from './Components/Header'
import CourseDetails from './Components/CourseDetails';


function App() {
  return (
    <div>
        <Header/>
          <div className="mar-top ">
            <CourseDetails/>
          </div>
    </div>
  );
}

export default App;
