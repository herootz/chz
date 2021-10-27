import React from 'react';
import './App.css';
import Timeline from "./components/timeline";
import item from "./item/timeline";

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Timeline items={item.items}/>
      </header>
    </div>
  );
}

export default App;
