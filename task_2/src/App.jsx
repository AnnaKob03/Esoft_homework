import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image_1 from './components/image_1.jpg';
import CardName from "./components/CardName.jsx"


function App() {
    return (
        <div className="App">
            <CardName
                image={image_1}
                title="Кобылкина Анна Андреевна"
            />
        </div>
    );
}

export default App;