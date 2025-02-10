import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import "./components/Navbar";
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    
    <div className='flex flex-row gap-7'>
      <Card
        title="Tokyo"
        imgURL="https://images.unsplash.com/photo-1738975927070-d5af82de67c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >Lorem ipsum dolor prova con children amet consectetur adipisicing elit. Assumenda tempore impedit ipsa quas veniam officiis eaque laboriosam modi! Repellat at ipsum?</Card>
      <Card 
        title="New York"
        imgURL="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Card>
      <Card
        title="Roma"
        imgURL="https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Card>
    </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
