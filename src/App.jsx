import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Routers from './routes/Routers';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;
