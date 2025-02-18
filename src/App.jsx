import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import "./components/Navbar";
import Navbar from './components/Navbar';
import Card from './components/Card';

function handleClick() {
  alert("hola!");
}
function handleChange(e) {
  console.log(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}

function App() {
  const [count, setCount] = useState(0);
  const cities = [
    {
      id: 0,
      name: "Lima",
      description: "lorem ipsum dolor causa, amet consectetur nova aris?",
      imgURL: "https://images.lonelyplanetitalia.it/static/places/lima-3437.jpg?q=90&p=2400%7C1350%7Cmax&s=3dc99d33fc99b4388f4cbe5dd0cc1441",
      isVisited: true,
    },
    {
      id: 1,
      name: "Varsavia",
      description: "Lorem ipsum dolor prova con children adipisicing elit. Veniam officiis eaque laboriosam modi!",
      imgURL: "https://images.unsplash.com/photo-1577133192629-5140c5371590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
    {
      id: 2,
      name: "Londra",
      description: "lorem ipsum dolor fish & chips. Repellat at omen ipsum?",
      imgURL: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
  ];

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    
    <div className='grid grid-cols-3 gap-x-10 gap-y-10'>
      <Card
      isVisited={true}
        title="Tokyo"
        imgURL="https://images.unsplash.com/photo-1738975927070-d5af82de67c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description="Lorem ipsum dolor sit, amet adipisicing elit. Excepturi, odio quia pariatur quod soluta optio!"
      ></Card>
      <Card
      isVisited={false}
        title="New York"
        imgURL="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, odio quia soluta optio!"
      ></Card>
      <Card
      isVisited={true}
        title="Roma"
        imgURL="https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description="Lorem ipsum dolor sit, amet amon adipisicing elit. Excepturi, odio quia pariatur quod soluta optio!"
      ></Card>

      {cities.map((city) => (
        <Card
        key={city.id}
        title={city.name}
        imgURL={city.imgURL}
        isVisited={city.isVisited}
        description={city.description}
        >
        {/* {city.description} */}
        </Card>
      ))}
    </div>

      <div className='flex justify-center p-5'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card flex justify-evenly">
        <button className='bg-black' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>Alert</button>
        <input type="text"onChange={handleChange} />
        <form onSubmit={handleSubmit}>
          <button type='submit'>Invia</button>
        </form>
      </div>
    </>
  )
}

export default App
