import React from 'react';
import './App.css';
import Mars, {MarsImg} from './components/Mars'


function App() {
  return (
    <div className="App">
        <h1>Welcome to Mars!</h1>
        <Mars/>
        <MarsImg/>
    </div>
  );
}

export default App;
