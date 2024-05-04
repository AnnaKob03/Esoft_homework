import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bigPhoto from 'C:/Users/kobyl/Desktop/Esoft/image_1.jpg';
import CardName from "./components/CardName.jsx"


function App() {
    return (
        <div className="App">
            <CardName
                image={bigPhoto}
                title="Кобылкина Анна Андреевна"
            />
        </div>
    );
}

export default App;