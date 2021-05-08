import './App.css';
import './assets/centre.css'
import './assets/right.css'
import React from 'react'
import './assets/sidebar.css'
import Sidebar from "./Components/sidebar";
import Right from "./Components/right";
import Centre from "./Components/center"
function App() {
  return (
  <div className="outer test">
  <Sidebar />   
  <Centre/>
  </div>
  );
}

export default App;
