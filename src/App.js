import logo from './logo.svg';
import './App.css';
import React,  { useState, useEffect, useCallback, memo } from 'react';
import SideBar from './Components/SideBar';
import Blog from './Components/Blog';

function App() {

  const [activeSection, setActiveSection] = useState('home');

  const MemoizedSideBar = memo(SideBar, (prevProps, nextProps) => {
    return prevProps.activeSection === nextProps.activeSection;
  });

  return (
    <div className="App">
      <div className="App-SideBar">
        <MemoizedSideBar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <div className="App-Blog">
        <Blog activeSection={activeSection} setActiveSection={setActiveSection}/>
      </div>
    </div>
  );
}

export default App;
